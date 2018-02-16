(function () {
  var en;
  var kin;

  $(function () {
    kin = $("#font_1");
    en = $("#font_2");

    window.addEventListener("deviceproximity", deviceproximityHandler);
  });

  // ���m�͈͂̏󋵂��ω�
  function deviceproximityHandler(event) {
    if (!event.value) {
      // �Z���T�[�̌��m�͈͂ɕ��̂�����
      showKin();
    } else {
      // �Z���T�[�̌��m�͈͂ɕ��̂͂Ȃ�
      showEn();
    }
  }

  // ��
  function showKin() {
    en
      .stop()
      .transition({scale: 0});
    kin
      .stop()
      .css({display: "block", scale: 1.5})
      .transition({scale: 1}, 500, "easeOutCubic");
  }

  // ��
  function showEn() {
    en
      .stop()
      .transition({scale: 1});
    kin
      .stop()
      .transition({scale: 1.5}, 200, "easeInCubic", function () {
        $(this).css({display: "none"});
      });
  }
})();