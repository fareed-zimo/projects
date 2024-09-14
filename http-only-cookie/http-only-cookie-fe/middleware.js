export async function middleware(request) {
  const currentUser = request.cookies.get("refreshToken")?.value;
  const currentUserProvider = request.cookies.get(
    "next-auth.session-token"
  )?.value;

  console.log("currentUserProvider", currentUserProvider);

  if (
    (currentUser || currentUserProvider) &&
    !request.nextUrl.pathname.startsWith("/")
  ) {
    return Response.redirect(new URL("/", request.url));
  }

  if (
    (currentUser || currentUserProvider) &&
    request.nextUrl.pathname.startsWith("/login")
  ) {
    return Response.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
