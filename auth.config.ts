import { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl }}) {
            const isLoggedIn = !!auth?.user;
            const isProtegido = nextUrl.pathname.startsWith('/protegido');
            if (isProtegido) {
                if (isLoggedIn) return true;
                return false;
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/protegido', nextUrl));
            }
            return true;
        },
    },
    providers: [],
} satisfies NextAuthConfig;