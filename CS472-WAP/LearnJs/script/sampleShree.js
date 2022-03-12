function piClick(that) {
  var valid = true;
  var fieldsToCheck = $("#personal-info-form").find(":required");
  $.each(fieldsToCheck, function (index, value) {
    if ($(value).val() == "") valid = false;
  });
  if (valid == false) {
    $("#personal-info-form").find(".formSubmit").click();
    return false;
  }
  var post_data = changeObjectToFormData(
    $("#personal-info-form").serializeArray()
  );
 //
 
}
function changeObjectToFormData(object, msg_type) {
  var fd = {};
  $.each(object, function (key, value) {
    fd[value.name] = value.value;
  });
  return fd;
}
