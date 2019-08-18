
(function(global) {
  function now() {
    return new Date();
  }

  if (typeof (window._bokeh_onload_callbacks) === "undefined") {
    window._bokeh_onload_callbacks = [];
  }

  function run_callbacks() {
    window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
    delete window._bokeh_onload_callbacks
    console.info("Bokeh: all callbacks have finished");
  }

  function load_libs(js_urls, callback) {
    window._bokeh_onload_callbacks.push(callback);
    if (window._bokeh_is_loading > 0) {
      console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
      return null;
    }
    if (js_urls == null || js_urls.length === 0) {
      run_callbacks();
      return null;
    }
    console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
    window._bokeh_is_loading = js_urls.length;
    for (var i = 0; i < js_urls.length; i++) {
      var url = js_urls[i];
      var s = document.createElement('script');
      s.src = url;
      s.async = false;
      s.onreadystatechange = s.onload = function() {
        window._bokeh_is_loading--;
        if (window._bokeh_is_loading === 0) {
          console.log("Bokeh: all BokehJS libraries loaded");
          run_callbacks()
        }
      };
      s.onerror = function() {
        console.warn("failed to load library " + url);
      };
      console.log("Bokeh: injecting script tag for BokehJS library: ", url);
      document.getElementsByTagName("head")[0].appendChild(s);
    }
  };var element = document.getElementById("7fba9ab9-ef2d-4242-a73e-318984de5ea9");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '7fba9ab9-ef2d-4242-a73e-318984de5ea9' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"05db1815-b817-483c-868d-ea81d48d7f9a":{"roots":{"references":[{"attributes":{"plot":{"id":"29dc545a-c1e8-4884-8c37-8233acecfddc","subtype":"Chart","type":"Plot"}},"id":"0e37eb58-c42d-4e45-82ee-797486dac89b","type":"ResizeTool"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"}],"series":["pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy"],"x_values":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"y_values":[12,33,47,15,126,121,144,233,254,225,226,267,110,130]}},"id":"7f3079dc-a59b-4682-a0be-7d1b46575f06","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"3b718271-6fcd-4c34-aa39-b67b62eb7854","type":"Line"},{"attributes":{"plot":{"id":"29dc545a-c1e8-4884-8c37-8233acecfddc","subtype":"Chart","type":"Plot"},"ticker":{"id":"29b68701-41de-4fbb-9673-4e504c054f12","type":"BasicTicker"}},"id":"d56eba80-e327-4c35-8515-beaccc2c0b0c","type":"Grid"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"}],"series":["python","python","python","python","python","python","python","python","python","python","python","python","python","python"],"x_values":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"y_values":[2,3,7,5,26,221,44,233,254,265,266,267,120,111]}},"id":"f3245dc9-4e60-463a-85ca-4f8ad36a8606","type":"ColumnDataSource"},{"attributes":{},"id":"7a1dd810-9503-4778-bf52-14b1a5c62d12","type":"ToolEvents"},{"attributes":{},"id":"25f712ba-ed48-4237-8f96-7af1c4e77a1b","type":"BasicTickFormatter"},{"attributes":{},"id":"14957acc-5c46-41f1-9d7c-409afe119a77","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"29dc545a-c1e8-4884-8c37-8233acecfddc","subtype":"Chart","type":"Plot"}},"id":"503704c5-d183-4321-a0b7-fafef4bc2bcf","type":"ResetTool"},{"attributes":{"plot":{"id":"29dc545a-c1e8-4884-8c37-8233acecfddc","subtype":"Chart","type":"Plot"}},"id":"ef36a464-0ee1-4874-b338-87bd49f87367","type":"PreviewSaveTool"},{"attributes":{"plot":{"id":"29dc545a-c1e8-4884-8c37-8233acecfddc","subtype":"Chart","type":"Plot"}},"id":"7f098d62-fb42-4777-b78e-d359da1982c5","type":"WheelZoomTool"},{"attributes":{"axis_label":"Duration","formatter":{"id":"25f712ba-ed48-4237-8f96-7af1c4e77a1b","type":"BasicTickFormatter"},"plot":{"id":"29dc545a-c1e8-4884-8c37-8233acecfddc","subtype":"Chart","type":"Plot"},"ticker":{"id":"4eb31092-d752-4a7f-97d3-dd0015c7d9fc","type":"BasicTicker"}},"id":"36299cfd-49dd-482e-8900-0898b669b430","type":"LinearAxis"},{"attributes":{"data_source":{"id":"7f3079dc-a59b-4682-a0be-7d1b46575f06","type":"ColumnDataSource"},"glyph":{"id":"ad37f8fb-8b8c-49df-b196-04da2a266a1e","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5a6c2975-2ea1-4b60-b902-4d793c508336","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"29dc545a-c1e8-4884-8c37-8233acecfddc","subtype":"Chart","type":"Plot"}},"id":"e5994a57-f653-4056-b466-f7e7c06e7688","type":"HelpTool"},{"attributes":{"legends":[["python",[{"id":"6be3c34a-5a56-4371-993a-4800ade8aa1e","type":"GlyphRenderer"}]],["pypy",[{"id":"5a6c2975-2ea1-4b60-b902-4d793c508336","type":"GlyphRenderer"}]],["jython",[{"id":"48736e5b-bae1-499a-a8ac-bc0b006813aa","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"29dc545a-c1e8-4884-8c37-8233acecfddc","subtype":"Chart","type":"Plot"}},"id":"d82ba9cc-eefa-46fc-8559-15d9530dd7af","type":"Legend"},{"attributes":{},"id":"4eb31092-d752-4a7f-97d3-dd0015c7d9fc","type":"BasicTicker"},{"attributes":{},"id":"29b68701-41de-4fbb-9673-4e504c054f12","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"29dc545a-c1e8-4884-8c37-8233acecfddc","subtype":"Chart","type":"Plot"},"ticker":{"id":"4eb31092-d752-4a7f-97d3-dd0015c7d9fc","type":"BasicTicker"}},"id":"cbc9beee-c736-44cd-9662-64da841be6f8","type":"Grid"},{"attributes":{"callback":null,"end":293.5,"start":-24.5},"id":"0ca353f3-1d3a-41f3-81d8-910627290a26","type":"Range1d"},{"attributes":{"line_color":{"value":"#407ee7"},"line_dash":[2,4],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"3493a902-4180-4b59-8da9-f309a0d64be4","type":"Line"},{"attributes":{"line_color":{"value":"#5ab738"},"line_dash":[6],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"ad37f8fb-8b8c-49df-b196-04da2a266a1e","type":"Line"},{"attributes":{"overlay":{"id":"67e65864-1255-42a5-b6a5-28321534dc59","type":"BoxAnnotation"},"plot":{"id":"29dc545a-c1e8-4884-8c37-8233acecfddc","subtype":"Chart","type":"Plot"}},"id":"b7fa9517-d61b-4b65-bae7-dd4545ae3087","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":14.3,"start":-1.3},"id":"7abec602-b011-444d-b958-e38d53167edb","type":"Range1d"},{"attributes":{"below":[{"id":"6281ae7f-b3d0-4e2c-93d7-6d72bee4047d","type":"LinearAxis"}],"left":[{"id":"36299cfd-49dd-482e-8900-0898b669b430","type":"LinearAxis"}],"legend":true,"plot_height":400,"plot_width":400,"renderers":[{"id":"67e65864-1255-42a5-b6a5-28321534dc59","type":"BoxAnnotation"},{"id":"6be3c34a-5a56-4371-993a-4800ade8aa1e","type":"GlyphRenderer"},{"id":"5a6c2975-2ea1-4b60-b902-4d793c508336","type":"GlyphRenderer"},{"id":"48736e5b-bae1-499a-a8ac-bc0b006813aa","type":"GlyphRenderer"},{"id":"d82ba9cc-eefa-46fc-8559-15d9530dd7af","type":"Legend"},{"id":"6281ae7f-b3d0-4e2c-93d7-6d72bee4047d","type":"LinearAxis"},{"id":"36299cfd-49dd-482e-8900-0898b669b430","type":"LinearAxis"},{"id":"d56eba80-e327-4c35-8515-beaccc2c0b0c","type":"Grid"},{"id":"cbc9beee-c736-44cd-9662-64da841be6f8","type":"Grid"}],"title":"Interpreter Sample Data","title_text_font_size":{"value":"14pt"},"tool_events":{"id":"7a1dd810-9503-4778-bf52-14b1a5c62d12","type":"ToolEvents"},"tools":[{"id":"9730843e-577c-45e7-9971-91355cabb973","type":"PanTool"},{"id":"7f098d62-fb42-4777-b78e-d359da1982c5","type":"WheelZoomTool"},{"id":"b7fa9517-d61b-4b65-bae7-dd4545ae3087","type":"BoxZoomTool"},{"id":"ef36a464-0ee1-4874-b338-87bd49f87367","type":"PreviewSaveTool"},{"id":"0e37eb58-c42d-4e45-82ee-797486dac89b","type":"ResizeTool"},{"id":"503704c5-d183-4321-a0b7-fafef4bc2bcf","type":"ResetTool"},{"id":"e5994a57-f653-4056-b466-f7e7c06e7688","type":"HelpTool"}],"x_mapper_type":"auto","x_range":{"id":"7abec602-b011-444d-b958-e38d53167edb","type":"Range1d"},"xscale":"auto","y_mapper_type":"auto","y_range":{"id":"0ca353f3-1d3a-41f3-81d8-910627290a26","type":"Range1d"},"yscale":"auto"},"id":"29dc545a-c1e8-4884-8c37-8233acecfddc","subtype":"Chart","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"67e65864-1255-42a5-b6a5-28321534dc59","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"f3245dc9-4e60-463a-85ca-4f8ad36a8606","type":"ColumnDataSource"},"glyph":{"id":"3493a902-4180-4b59-8da9-f309a0d64be4","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6be3c34a-5a56-4371-993a-4800ade8aa1e","type":"GlyphRenderer"},{"attributes":{"axis_label":"index","formatter":{"id":"14957acc-5c46-41f1-9d7c-409afe119a77","type":"BasicTickFormatter"},"plot":{"id":"29dc545a-c1e8-4884-8c37-8233acecfddc","subtype":"Chart","type":"Plot"},"ticker":{"id":"29b68701-41de-4fbb-9673-4e504c054f12","type":"BasicTicker"}},"id":"6281ae7f-b3d0-4e2c-93d7-6d72bee4047d","type":"LinearAxis"},{"attributes":{"data_source":{"id":"6bd9b330-9c71-467c-b9bc-e8c127ba3dd0","type":"ColumnDataSource"},"glyph":{"id":"3b718271-6fcd-4c34-aa39-b67b62eb7854","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"48736e5b-bae1-499a-a8ac-bc0b006813aa","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"}],"series":["jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython"],"x_values":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"y_values":[22,43,10,25,26,101,114,203,194,215,201,227,139,160]}},"id":"6bd9b330-9c71-467c-b9bc-e8c127ba3dd0","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"29dc545a-c1e8-4884-8c37-8233acecfddc","subtype":"Chart","type":"Plot"}},"id":"9730843e-577c-45e7-9971-91355cabb973","type":"PanTool"}],"root_ids":["29dc545a-c1e8-4884-8c37-8233acecfddc"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"05db1815-b817-483c-868d-ea81d48d7f9a","elementid":"7fba9ab9-ef2d-4242-a73e-318984de5ea9","modelid":"29dc545a-c1e8-4884-8c37-8233acecfddc"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
    }
  ];

  function run_inline_js() {
    for (var i = 0; i < inline_js.length; i++) {
      inline_js[i](window.Bokeh);
    }
  }

  if (window._bokeh_is_loading === 0) {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    run_inline_js();
  } else {
    load_libs(js_urls, function() {
      console.log("Bokeh: BokehJS plotting callback run at", now());
      run_inline_js();
    });
  }
}(this));