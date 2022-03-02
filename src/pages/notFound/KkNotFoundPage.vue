<template>
  <div class="tw-hero tw-min-h-screen tw-bg-base-300">
    <div class="tw-px-40 tw-py-20 tw-bg-white tw-rounded-md tw-shadow-xl">
      <div class="tw-flex tw-flex-col tw-items-center">
        <h1 class="tw-font-bold tw-text-blue-600 tw-text-9xl">404</h1>

        <h6
          class="tw-mb-2 tw-text-2xl tw-font-bold tw-text-center tw-text-gray-800 md:tw-text-3xl"
        >
          <span class="tw-text-red-500">Oops!</span> Page not found
        </h6>

        <p class="tw-mb-8 tw-text-center tw-text-gray-500 md:tw-text-lg">
          The page you’re looking for doesn’t exist.
        </p>

        <a
          href="/"
          class="tw-px-6 tw-py-2 tw-text-sm tw-font-semibold tw-text-blue-800 tw-bg-blue-100"
          >Go home</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KkNotFoundPage',
}
</script>
