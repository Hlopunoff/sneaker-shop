<template>
  <Teleport to="body">
    <section v-if="isOpened" :class="b()" @click.self="onModalClose">
      <div :class="b('inner')">
        <nav :class="b('tabs')">
          <div 
          :class="b('tab', {active: activeTab === 'registration'})" 
          @click="onTabClick('registration')">Регистрация</div>
          <div 
          :class="b('tab', {active: activeTab === 'auth'})" 
          @click="onTabClick('auth')">Авторизация</div>
        </nav>
        <FormKit 
        type="form"
        :actions="false">
          <FormKit 
          v-model="email"
          name="login" 
          type="email" 
          label="Email" 
          placeholder="Email"
          :label-class="b('login-label')"
          :input-class="b('login-input')"/>
          <FormKit 
          v-model="password"
          name="password" 
          type="password" 
          label="Пароль"
          placeholder="Пароль"
          :outer-class="b('pass-outer')"
          :label-class="b('pass-label')"
          :input-class="b('pass-input')"/>
          <FormKit
          name="btn-submit"
          type="submit"
          :label="submitButtonLabel"
          :outer-class="b('button-outer')"
          :input-class="b('button-input')"
          :disabled="isButtonDisabled"
          @click="onSubmit"
          />
        </FormKit>
        <div :class="b('button-close')" @click="onModalClose($event)">&#10060;</div>
      </div>
    </section>
  </Teleport>
</template>

<script src="./auth-modal.script.js"></script>

<style src="./auth-modal.style.scss" lang="scss"></style>