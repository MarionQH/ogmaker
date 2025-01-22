import User from '#models/user'
import { test } from '@japa/runner'

test.group('User Email Uniqueness', () => {
  test('quand je crée un nouvel utilisateur avec un email déjà utilisé, il ne doit pas être enregistré', async ({
    assert,
  }) => {
    // Arrange
    const existingUser = new User()
    existingUser.password = 'secret'
    existingUser.email = 'existing.email@example.com'
    await existingUser.save()

    const newUser = new User()
    newUser.password = 'secret'
    newUser.email = 'existing.email@example.com'

    // Act
    try {
      await newUser.save()
      assert.fail('User.save() should have thrown an error')
    } catch (err) {
      console.log('Error caught:', err)
      // Assert
      assert.strictEqual(err.name, 'ValidationException')
      assert.strictEqual(err.messages[0].field, 'email')
      assert.strictEqual(err.messages[0].message, 'Email must be unique')
    }
  })
})
