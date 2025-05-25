
function Signin() {
  return (
    <div>
          <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
    <h2 class="text-2xl font-bold mb-6 text-center text-gray-700">Sign In</h2>
    <form>
      <div class="mb-4">
        <label for="email" class="block text-gray-600 mb-1">Email</label>
        <input
          type="email"
          id="email"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="you@example.com"
          required
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-gray-600 mb-1">Password</label>
        <input
          type="password"
          id="password"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="••••••••"
          required
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Sign In
      </button>
    </form>
    <p class="text-sm text-center text-gray-500 mt-4">
      Don't have an account?
      <a href="#" class="text-blue-500 hover:underline">Sign Up</a>
    </p>
  </div>
    </div>
  )
}

export default Signin