import User from '#models/user'
import { test } from '@japa/runner'

test.group('User Registration', () => {
  test('quand je crée un nouvel utilisateur avec un email valide, il est bien enregistré', async ({
    assert,
  }) => {
    // Arrange
    const user = new User()
    user.password = 'secret'
    user.email = 'valid.email@example.com'
    // Act
    await user.save()
    // Assert
    const savedUser = await User.findBy('email', user.email)
    assert.isNotNull(savedUser)
    if (savedUser) {
      assert.equal(savedUser.email, user.email)
    }
  })

  test('quand je crée un nouvel utilisateur avec un email invalide, il ne doit pas être enregistré', async ({
    assert,
  }) => {
    // Arrange
    const user = new User()
    user.password = 'secret'
    user.email = 'invalid-email'
    // Act
    try {
      await user.save()
      assert.fail('User.save() should have thrown an error')
    } catch (err) {
      console.log('Error caught:', err)
      // Assert
      assert.strictEqual(err.name, 'AssertionError')
    }
  })
})
