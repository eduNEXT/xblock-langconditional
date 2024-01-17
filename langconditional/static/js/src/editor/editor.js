/* Javascript for LangConditionalXBlock. */
function LangConditionalXBlock(runtime, element) {

    $(element).find('.save-button').bind('click', function() {
        var handlerUrl = runtime.handlerUrl(element, 'studio_submit');
        var sourcesList = [];
        $(element).find('input[name=langconditional_sources_list]').each(function() {
            sourcesList.push($(this).val());
        });
        console.log(sourcesList);
        var data = {
            display_name: $(element).find('input[name=langconditional_display_name]').val(),
            conditional_message: $(element).find('textarea[name=langconditional_conditional_message]').val(),
            conditional_attr: $(element).find('select[name=langconditional_conditional_attr]').val(),
            conditional_value: $(element).find('input[name=langconditional_conditional_value]').val(),
            sources_list: sourcesList,
        };
        $.post(handlerUrl, JSON.stringify(data)).done(function(response) {
          window.location.reload(false);
        });
      });

    $(element).find('.cancel-button').bind('click', function() {
        runtime.notify('cancel', {});
    });
}