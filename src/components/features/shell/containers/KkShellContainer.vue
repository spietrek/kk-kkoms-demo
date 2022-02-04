<template>
  <div class="kk-shell-container">
    <div
      class="
        tw-navbar tw-mb-2 tw-shadow-lg tw-bg-neutral tw-text-neutral-content
      "
    >
      <div class="tw-px-2 tw-mx-2 tw-navbar-start">
        <span class="tw-text-lg tw-font-bold"> KKOMS </span>
      </div>
      <div class="tw-hidden tw-px-2 tw-mx-2 tw-navbar-center lg:tw-flex">
        <div class="tw-flex tw-items-stretch">
          <router-link class="tw-btn tw-btn-ghost tw-btn-sm rounded-btn" to="/">
            Home
          </router-link>
          <router-link
            class="tw-btn tw-btn-ghost tw-btn-sm rounded-btn"
            to="/dcb"
          >
            DCB
          </router-link>
          <router-link
            class="tw-btn tw-btn-ghost tw-btn-sm rounded-btn"
            to="/inventory"
          >
            Inventory
          </router-link>
          <router-link
            class="tw-btn tw-btn-ghost tw-btn-sm rounded-btn"
            to="/advanced-orders"
          >
            Advanced Orders
          </router-link>
        </div>
      </div>
      <div class="tw-navbar-end">
        <button class="tw-btn tw-btn-square tw-btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="tw-inline-block tw-w-6 tw-h-6 tw-stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
        </button>
        <button class="tw-btn tw-btn-square tw-btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="tw-inline-block tw-w-6 tw-h-6 tw-stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'kk-shell-container',
}
</script>
