import User from '#models/user'
import { test } from '@japa/runner'
import { registerValidator } from '#validators/auth'

test.group('User Email Uniqueness', () => {
  test('quand je crée un nouvel utilisateur avec un email déjà utilisé, il ne doit pas être enregistré', async ({
    assert,
  }) => {
    // Arrange: Create an existing user
    const existingUser = new User()
    existingUser.password = 'secret'
    existingUser.email = 'existing.email@example.com'
    await existingUser.save()

    const newUserData = {
      email: 'existing.email@example.com',
      password: 'secret',
    }

    // Act
    try {
      // Validate new user data using the registerValidator
      await registerValidator.validate(newUserData)

      // Save the new user if validation passes (it shouldn't in this case)
      const newUser = new User()
      newUser.merge(newUserData)
      await newUser.save()

      // If no error is thrown, the test should fail
      assert.fail('User.save() should have thrown a uniqueness validation error')
    } catch (err) {
      // Assert: Ensure it's a validation error for the email field
      assert.exists(err.messages, 'Error messages should exist')
      assert.strictEqual(err.messages[0].field, 'email')
      assert.strictEqual(err.messages[0].message, 'The email has already been taken')
    }
  })
})
