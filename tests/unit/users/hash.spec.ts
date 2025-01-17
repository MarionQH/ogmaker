import User from '#models/user'
import hash from '@adonisjs/core/services/hash'
import { test } from '@japa/runner'

test.group('Users hash', () => {
  test('quand je créer un nouvel utilisateur, quil est bien sauvé, tout mot de passe est bien hashé', async ({
    assert,
  }) => {
    // Arrange
    const user = new User()
    user.password = 'secret'
    user.email = 'a@b.c'
    // Act
    await user.save()
    // Assert
    assert.isTrue(hash.isValidHash(user.password))
    assert.isTrue(await hash.verify(user.password, 'secret'))
  })
})
