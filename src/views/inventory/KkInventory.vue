<template>
  <div class="tw-p4 lg:tw-p-10">
    <kk-underline-header title="Inventory"></kk-underline-header>
    <div class="tw-flex">
      <div class="tw-mt-8 tw-w-4/12">
        <div class="tw-card tw-card-bordered tw-bg-indigo-500">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div class="tw-card-body">
            <h2 class="tw-card-title tw-text-white">
              Top image
              <div class="tw-badge tw-mx-2 tw-badge-secondary">NEW</div>
            </h2>
            <p class="tw-text-white">
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div class="tw-justify-end tw-card-actions">
              <button class="tw-btn tw-btn-secondary">More info</button>
            </div>
          </div>
        </div>
      </div>
      <div class="tw-mt-8 tw-w-4/12 tw-px-4">
        <div class="tw-card tw-shadow-xl tw-image-full tw-h-full">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div class="tw-justify-end tw-card-body">
            <h2 class="tw-card-title">Image overlay</h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div class="tw-card-actions">
              <button class="tw-btn tw-btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div class="tw-mt-8 tw-w-4/12">
        <div class="tw-card tw-shadow-sm tw-bg-accent tw-text-accent-content">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div class="tw-card-body">
            <h2 class="tw-card-title">Accent color</h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div class="tw-card-actions">
              <button class="tw-btn tw-btn-secondary">More info</button>
            </div>
          </div>
        </div>
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
