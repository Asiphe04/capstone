<template>
  <section>
    <div class="footer-container text-center">
      <p class="text-white">Copyright &copy; {{ new Date().getFullYear() }}</p>
      <div class="social-icons">
        <a
          href="https://www.facebook.com/profile.php?id=100089087082905"
          target="_blank"
          ><i class="fa-brands fa-facebook" id="Facebook"></i
        ></a>
        <a href="https://twitter.com/ndim_asiphe" target="_blank"
          ><i class="fa-brands fa-twitter" id="Twitter"></i
        ></a>
        <a
          href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B8h9wTBRuSt2U75xVavKEoA%3D%3D"
          target="_blank"
          ><i class="fa-brands fa-linkedin" id="linkedIn"></i
        ></a>
        <a href="https://github.com/Asiphe04" target="_blank"
          ><i class="fa-brands fa-github" id="Github"></i
        ></a>
      </div>
    </div>
  </section>
</template>
<style scoped>
section {
  background-color: var(--secondary-color);
}

.footer-container a {
  color: white;
  font-size: xx-large;
}
.social-icons a {
  color: white;
  margin: 0 10px;
  font-size: 25px;
}
.social-icons a :hover {
  color: var(--primary-color);
}
</style>
