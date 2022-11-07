import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

import { pollRoutes } from './routes/poll'
import { authRoutes } from './routes/auth'
import { userRoutes } from './routes/user'
import { gameRoutes } from './routes/game'
import { guessRoutes } from './routes/guess'


async function bootstrap() {
    const fastify = Fastify({logger: true})

    await fastify.register(cors, {origin: true,})

    // When in production change for variable from ambient
    await fastify.register(jwt, {
        secret: 'nlwcopa', // Need generate a token
    })

    await fastify.register(pollRoutes)
    await fastify.register(authRoutes)
    await fastify.register(userRoutes)
    await fastify.register(gameRoutes)
    await fastify.register(guessRoutes)

    await fastify.listen({port: 3333, host: '0.0.0.0'})
}

bootstrap()