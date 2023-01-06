<template>
  <h1 class="calendar-page-title">Vue Inline Calendar Examples</h1>

  <p class="calendar-page-description">
    Drag calendar to right or left to get new dates. You can also enable mousewheel scroll by adding
    <code>enable-mousewheel-scroll</code> property.
  </p>

  <div class="calendar-wrapper">
    <p>
      You can simply select the date. <i>Selected date: {{ date }}</i>
    </p>
    <code class="code">
      <!-- prettier-ignore -->
      <span class="code__tag">&lt;<span class="code__name">vue-inline-calendar</span> <span class="code__attr">@update:select-date</span>=<span
          class="code__string">"date = $event"</span> /&gt;</span>
    </code>
    <vue-inline-calendar @update:selected-date="date = $event" />
  </div>

  <div class="calendar-wrapper">
    <p>
      You can set the initial date. <i>Selected date: {{ dateInitial }}</i>
    </p>
    <code class="code">
      <!-- prettier-ignore -->
      <span class="code__tag">&lt;<span class="code__name">vue-inline-calendar</span><span class="code__attr">:selected-date</span>=<span
        class="code__string">"dateInitial"</span> <span class="code__attr">@update:select-date</span>=<span
          class="code__string">"dateInitial = $event"</span> /&gt;</span>
    </code>
    <vue-inline-calendar :selected-date="dateInitial" @update:selected-date="dateInitial = $event" />
  </div>

  <div class="calendar-wrapper">
    <p>The component with <code>enable-mousewheel-scroll</code> property.</p>
    <code class="code">
      <!-- prettier-ignore -->
      <span class="code__tag">&lt;<span class="code__name">vue-inline-calendar</span> <span class="code__attr">@select-date</span>=<span
          class="code__string">"setDate"</span> <span class="code__attr">enable-mousewheel-scroll</span> /&gt;</span>
    </code>
    <vue-inline-calendar enable-mousewheel-scroll />
  </div>

  <div class="calendar-wrapper">
    <p>You can specify the minimal date and thereby exclude older dates from selection:</p>
    <code class="code">
      <!-- prettier-ignore -->
      <span class="code__tag">&lt;<span class="code__name">vue-inline-calendar</span> <span class="code__attr">:spec-min-date</span>=<span
        class="code__string">"new Date()"</span> /&gt;</span>
    </code>
    <vue-inline-calendar :spec-min-date="today" />
  </div>

  <div class="calendar-wrapper">
    <p>You can also specify the maximal date and thereby exclude newer dates from selection:</p>
    <code class="code">
      <!-- prettier-ignore -->
      <span class="code__tag">&lt;<span class="code__name">vue-inline-calendar</span> <span class="code__attr">:spec-max-date</span>=<span
        class="code__string">"new Date()"</span> /&gt;</span>
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
      <i>Start date: {{ datesRange.startDate }}</i>
    </p>
    <p>
      <i>End date: {{ datesRange.endDate }}</i>
    </p>
    <code class="code">
      <!-- prettier-ignore -->
      <span class="code__tag">&lt;<span class="code__name">vue-inline-calendar</span> <span
        class="code__attr">is-range</span> <span class="code__attr">@update:selected-range</span>=<span
        class="code__string">"setDatesRange"</span> /&gt;</span>
    </code>
    <vue-inline-calendar is-range @update:selected-range="setDatesRange" />
  </div>

  <div class="calendar-wrapper">
    <p>You can set initial range of dates:</p>
    <p>
      <i>Start date: {{ datesRangeInitial.startDate }}</i>
    </p>
    <p>
      <i>End date: {{ datesRangeInitial.endDate }}</i>
    </p>
    <code class="code">
      <!-- prettier-ignore -->
      <span class="code__tag">&lt;<span class="code__name">vue-inline-calendar</span> <span
        class="code__attr">is-range</span> <span class="code__attr">:selected-range</span>=<span
        class="code__string">"datesRangeInitial"</span> <span class="code__attr">@update:selected-range</span>=<span
        class="code__string">"setInitialDatesRange"</span> /&gt;</span>
    </code>
    <vue-inline-calendar is-range :selected-range="datesRangeInitial" @update:selected-range="setInitialDatesRange" />
  </div>

  <div class="calendar-wrapper">
    <p>You can combine the different properties to get the desired result:</p>
    <code class="code">
      <!-- prettier-ignore -->
      <span class="code__tag">&lt;<span class="code__name">vue-inline-calendar</span> <span class="code__attr">:spec-min-date</span>=<span
        class="code__string">"new Date()"</span> <span class="code__attr">is-range</span> <span class="code__attr">disable-weekends</span> <span
        class="code__attr">:show-year</span>=<span class="code__string">"false"</span> /&gt;</span>
    </code>
    <vue-inline-calendar :spec-min-date="today" is-range disable-weekends :show-year="false" />
  </div>

  <p>
    Read the
    <a
      class="calendar-link"
      href="https://github.com/SashaJarvi/vue-inline-calendar/blob/main/README.md"
      target="_blank"
      rel="nofollow noopener noreferrer"
      ><strong>docs</strong></a
    >
    to know more about the package usage
  </p>
</template>

<script setup>
import { reactive, ref } from "vue";
import VueInlineCalendar from "@/components/VueInlineCalendar.vue";

const today = new Date();
const date = ref(null);
const dateInitial = ref(new Date(new Date().setDate(new Date().getDate() + 1)));
const datesRange = reactive({
  startDate: null,
  endDate: null,
});
const datesRangeInitial = reactive({
  startDate: new Date(new Date().setDate(new Date().getDate() + 1)),
  endDate: new Date(new Date().setDate(new Date().getDate() + 5)),
});

const setDatesRange = ({ startDate, endDate }) => {
  datesRange.startDate = startDate;
  datesRange.endDate = endDate;
};

const setInitialDatesRange = ({ startDate, endDate }) => {
  datesRangeInitial.startDate = startDate;
  datesRangeInitial.endDate = endDate;
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
