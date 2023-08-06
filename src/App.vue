<template>
  <HomeView />
  <MainLayout>
    <AboutView />
    <SkillsView />
    <ContactsView />
    <router-view />
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/components/layouts/MainLayout.vue";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import SkillsView from "@/views/SkillsView.vue";
import ContactsView from "@/views/ContactsView.vue";
</script>
