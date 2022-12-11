<template>
  <h1 class="calendar-page-title">Vue Inline Calendar Examples</h1>

  <p class="calendar-page-description">
    Drag calendar to right or left to get new dates. You can also enable mousewheel scroll by adding
    <code>enable-mousewheel-scroll</code> property.
  </p>

  <div class="calendar-wrapper">
    <p>
      You can simply select the date. <i>Selected date: {{ selectedDate }}</i>
    </p>
    <code class="code">
      <!-- prettier-ignore -->
      <span class="code__tag">&lt;<span class="code__name">vue-inline-calendar</span> <span class="code__attr">@select-date</span>=<span class="code__string">"setDate"</span> /&gt;</span>
    </code>
    <vue-inline-calendar @select-date="setDate" />
  </div>

  <div class="calendar-wrapper">
    <p>
      The component with <code>enable-mousewheel-scroll</code> property. <i>Selected date: {{ selectedDate }}</i>
    </p>
    <code class="code">
      <!-- prettier-ignore -->
      <span class="code__tag">&lt;<span class="code__name">vue-inline-calendar</span> <span class="code__attr">@select-date</span>=<span class="code__string">"setDate"</span> <span class="code__attr">enable-mousewheel-scroll</span> /&gt;</span>
    </code>
    <vue-inline-calendar @select-date="setDate" enable-mousewheel-scroll />
  </div>

  <div class="calendar-wrapper">
    <p>You can specify the minimal date and thereby exclude older dates from selection:</p>
    <code class="code">
      <!-- prettier-ignore -->
      <span class="code__tag">&lt;<span class="code__name">vue-inline-calendar</span> <span class="code__attr">:spec-min-date</span>=<span class="code__string">"new Date()"</span> /&gt;</span>
    </code>
    <vue-inline-calendar :spec-min-date="today" />
  </div>

  <div class="calendar-wrapper">
    <p>You can also specify the maximal date and thereby exclude newer dates from selection:</p>
    <code class="code">
      <!-- prettier-ignore -->
      <span class="code__tag">&lt;<span class="code__name">vue-inline-calendar</span> <span class="code__attr">:spec-max-date</span>=<span class="code__string">"new Date()"</span> /&gt;</span>
    </code>
    <vue-inline-calendar :spec-max-date="today" />
  </div>

  <div class="calendar-wrapper">
    <p>You can exclude weekends from selection:</p>
    <code class="code">
      <!-- prettier-ignore -->
      <span class="code__tag">&lt;<span class="code__name">vue-inline-calendar</span> <span class="code__attr">disable-weekends</span> /&gt;</span>
    </code>
    <vue-inline-calendar disable-weekends />
  </div>

  <div class="calendar-wrapper">
    <p>You can select the range of dates (the start and end date selection will be emitted).</p>
    <p>
      <i>Start date: {{ startDate }}</i>
    </p>
    <p>
      <i>End date: {{ endDate }}</i>
    </p>
    <code class="code">
      <!-- prettier-ignore -->
      <span class="code__tag">&lt;<span class="code__name">vue-inline-calendar</span> <span class="code__attr">is-range</span> <span class="code__attr">@select-dates-range</span>=<span class="code__string">"setDatesRange"</span> /&gt;</span>
    </code>
    <vue-inline-calendar is-range @select-dates-range="setDatesRange" />
  </div>

  <div class="calendar-wrapper">
    <p>You can combine the different properties to get the desired result:</p>
    <code class="code">
      <!-- prettier-ignore -->
      <span class="code__tag">&lt;<span class="code__name">vue-inline-calendar</span> <span class="code__attr">:spec-min-date</span>=<span class="code__string">"new Date()"</span> <span class="code__attr">is-range</span> <span class="code__attr">disable-weekends</span> <span class="code__attr">:show-year</span>=<span class="code__string">"false"</span> /&gt;</span>
    </code>
    <vue-inline-calendar :spec-min-date="today" is-range disable-weekends :show-year="false" />
  </div>

  <p>
    Read the
    <a
      class="calendar-link"
      href="https://github.com/SashaJarvi/vue2-inline-calendar/blob/main/README.md"
      target="_blank"
      rel="nofollow noopener noreferrer"
      ><strong>docs</strong></a
    >
    to know more about the package usage
  </p>
</template>

<script setup>
import { ref } from "vue";
import VueInlineCalendar from "@/components/VueInlineCalendar.vue";

const today = new Date();
const selectedDate = ref(null);
const startDate = ref(null);
const endDate = ref(null);

const setDate = date => {
  selectedDate.value = date;
};

const setDatesRange = range => {
  startDate.value = range.startDate;
  endDate.value = range.endDate;
};
</script>

<style lang="scss">
.calendar-page-title {
  margin-bottom: 20px;
  text-align: center;
}
.calendar-page-description {
  margin-bottom: 40px;
  text-align: center;
}
.calendar-wrapper {
  margin-bottom: 40px;
  & > p {
    margin-bottom: 15px;
  }
  .code {
    display: block;
    min-width: 100px;
    max-width: 100%;
    margin-bottom: 15px;
    padding: 15px;
    border-radius: 8px;
    white-space: pre;
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
    &__tag,
    &__name,
    &__attr {
      color: #2973b7;
    }
    &__string {
      color: #42b983;
    }
  }
}
.calendar-link {
  color: #0094ff;
  text-decoration: none;
}
</style>
