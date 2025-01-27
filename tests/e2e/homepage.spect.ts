import { test } from '@japa/runner'
import { assert as japaAssert } from '@japa/assert'
import supertest from 'supertest'
import { HttpServer } from '@adonisjs/core/build/src/Server'
import app from '@adonisjs/core/services/app'

// Assurez-vous d'importer correctement le serveur HTTP
const httpServer: HttpServer = app.container.resolveBinding('Adonis/Core/Server')

test.group('Homepage Load Test', () => {
  test("vérifier que la page d'accueil se charge bien", async ({ assert }) => {
    // Act: Make a GET request to the homepage
    const response = await supertest(httpServer).get('/')

    // Assert: Check that the response status is 200 (OK)
    assert.equal(response.status, 200)

    // Optionally, you can check for specific content in the response
    assert.include(response.text, 'Welcome to the homepage')
  })
})
