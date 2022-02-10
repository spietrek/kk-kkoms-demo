<template>
  <div class="tw-p4 lg:tw-p-10">
    <kk-underline-header title="HR Bridge"></kk-underline-header>

    <div class="tw-w-full tw-shadow-2xl tw-stats">
      <div class="tw-stat">
        <div class="tw-stat-figure tw-text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="tw-inline-block tw-w-8 tw-h-8 tw-stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div class="tw-stat-title">Total Likes</div>
        <div class="tw-stat-value tw-text-primary">25.6K</div>
        <div class="tw-stat-desc">21% more than last month</div>
      </div>
      <div class="tw-stat">
        <div class="tw-stat-figure tw-text-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="tw-inline-block tw-w-8 tw-h-8 tw-stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div class="tw-stat-title">Page Views</div>
        <div class="tw-stat-value tw-text-info">2.6M</div>
        <div class="tw-stat-desc">21% more than last month</div>
      </div>
      <div class="tw-stat">
        <div class="tw-stat-figure tw-text-info">
          <div class="tw-avatar tw-online">
            <div
              class="
                tw-w-24 tw-h-24 tw-p-1 tw-mask tw-mask-squircle tw-bg-base-100
              "
            >
              <img
                src="https://robohash.org/QJQ.png?set=set1&size=150x150"
                alt="Avatar Tailwind CSS Component"
                class="tw-mask tw-mask-squircle"
              />
            </div>
          </div>
        </div>
        <div class="tw-stat-value">86%</div>
        <div class="tw-stat-title">Tasks done</div>
        <div class="tw-stat-desc tw-text-info">31 tasks remaining</div>
      </div>
    </div>

    <div class="tw-w-full tw-shadow-2xl tw-stats tw-mt-8">
      <div class="tw-stat tw-place-items-center place-content-center">
        <div class="tw-stat-title">Downloads</div>
        <div class="tw-stat-value">310M</div>
        <div class="tw-stat-desc">Jan 1st - Feb 1st</div>
      </div>
      <div class="tw-stat tw-place-items-center tw-place-content-center">
        <div class="tw-stat-title">New Users</div>
        <div class="tw-stat-value tw-text-success">4,200</div>
        <div class="tw-stat-desc tw-text-success">↗︎ 400 (22%)</div>
      </div>
      <div class="tw-stat tw-place-items-center tw-place-content-center">
        <div class="tw-stat-title">New Registers</div>
        <div class="tw-stat-value tw-text-error">1,200</div>
        <div class="tw-stat-desc tw-text-error">↘︎ 90 (14%)</div>
      </div>
    </div>
  </div>
</template>

<script>
import KkUnderlineHeader from '@/components/atoms/KkUnderlineHeader'

export default {
  name: 'kk-inventory',

  components: {
    KkUnderlineHeader,
  },
}
</script>
