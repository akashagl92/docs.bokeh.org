(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("6e6bcc70-5c00-4b24-bb3d-ae31ccca4928");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6e6bcc70-5c00-4b24-bb3d-ae31ccca4928' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"c61edeb2-2b36-45f6-ab47-098a4a3e6181":{"roots":{"references":[{"attributes":{},"id":"953af650-48c4-42c7-aa29-4cd3ff3f1d55","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"72f56e24-7759-44c2-b982-428ccf8378ae","type":"Selection"},"selection_policy":{"id":"b40813bf-ae40-44da-aedb-ff45d4326509","type":"UnionRenderers"}},"id":"792f540a-7816-4121-a4a7-8eb6082aa601","type":"ColumnDataSource"},{"attributes":{},"id":"02aad1c0-636e-49a7-a139-633dc0db28b5","type":"BasicTicker"},{"attributes":{},"id":"b40813bf-ae40-44da-aedb-ff45d4326509","type":"UnionRenderers"},{"attributes":{},"id":"4226307c-230e-4026-9e7f-50642eb57aff","type":"BasicTicker"},{"attributes":{},"id":"4a875a3c-b24d-4ac9-abab-92ea2d9cd447","type":"SaveTool"},{"attributes":{"data_source":{"id":"792f540a-7816-4121-a4a7-8eb6082aa601","type":"ColumnDataSource"},"glyph":{"id":"cca8fd9f-42bd-491c-9e61-7af671618996","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f1b064a2-583d-4af5-8e58-6d64c67d12e4","type":"Circle"},"selection_glyph":null,"view":{"id":"b2c88c11-ffae-41e3-a47b-e71b62e3b102","type":"CDSView"}},"id":"9187bc30-39f0-4a73-b879-745ec84f6155","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"4f19765a-8be4-4c24-bf95-a22e9d55a94c","type":"NumeralTickFormatter"},"plot":{"id":"afe5c18d-60bf-4b8a-be22-5f8ebb1fbdc1","subtype":"Figure","type":"Plot"},"ticker":{"id":"4226307c-230e-4026-9e7f-50642eb57aff","type":"BasicTicker"}},"id":"53b66186-7920-4e9e-9d5c-d84b3ddcd0f5","type":"LinearAxis"},{"attributes":{},"id":"1e8bba9e-bf3e-4cb1-8f18-50bbb5b060b0","type":"HelpTool"},{"attributes":{},"id":"fb2db9a5-5966-46e3-8b7f-50c0120b2ca2","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a52adec6-f9cc-43c6-8bd3-c61e9a80926c","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"53b66186-7920-4e9e-9d5c-d84b3ddcd0f5","type":"LinearAxis"}],"left":[{"id":"5965472f-b323-48ff-936e-1355c16f1cfd","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"53b66186-7920-4e9e-9d5c-d84b3ddcd0f5","type":"LinearAxis"},{"id":"7c1dae96-5ef6-45ce-808d-d24752918a15","type":"Grid"},{"id":"5965472f-b323-48ff-936e-1355c16f1cfd","type":"LinearAxis"},{"id":"624e7e9f-85e9-42b1-af02-14eb77a74302","type":"Grid"},{"id":"a52adec6-f9cc-43c6-8bd3-c61e9a80926c","type":"BoxAnnotation"},{"id":"9187bc30-39f0-4a73-b879-745ec84f6155","type":"GlyphRenderer"}],"title":{"id":"ec9d5f67-2536-475f-836b-9d671cce0411","type":"Title"},"toolbar":{"id":"d6b19545-08fc-4449-82a0-efb58199ee1c","type":"Toolbar"},"x_range":{"id":"c9c18d8a-50e1-448a-a730-90fb2d9de570","type":"DataRange1d"},"x_scale":{"id":"953af650-48c4-42c7-aa29-4cd3ff3f1d55","type":"LinearScale"},"y_range":{"id":"4fead779-16a8-49f1-bd6b-3bb4bba2ddb1","type":"DataRange1d"},"y_scale":{"id":"df8b624a-831b-4094-8671-42848857df1e","type":"LinearScale"}},"id":"afe5c18d-60bf-4b8a-be22-5f8ebb1fbdc1","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"cca8fd9f-42bd-491c-9e61-7af671618996","type":"Circle"},{"attributes":{"format":"0.0%"},"id":"4f19765a-8be4-4c24-bf95-a22e9d55a94c","type":"NumeralTickFormatter"},{"attributes":{},"id":"71c95e8c-6fca-41d5-a3b9-ede9b6fe0418","type":"WheelZoomTool"},{"attributes":{"format":"$0.00"},"id":"b6ac520c-4de1-44b0-9359-b795788e8dd0","type":"NumeralTickFormatter"},{"attributes":{},"id":"df8b624a-831b-4094-8671-42848857df1e","type":"LinearScale"},{"attributes":{"overlay":{"id":"a52adec6-f9cc-43c6-8bd3-c61e9a80926c","type":"BoxAnnotation"}},"id":"ae38a12f-ca44-4de0-b560-8480bba83bc3","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"4fead779-16a8-49f1-bd6b-3bb4bba2ddb1","type":"DataRange1d"},{"attributes":{"source":{"id":"792f540a-7816-4121-a4a7-8eb6082aa601","type":"ColumnDataSource"}},"id":"b2c88c11-ffae-41e3-a47b-e71b62e3b102","type":"CDSView"},{"attributes":{"formatter":{"id":"b6ac520c-4de1-44b0-9359-b795788e8dd0","type":"NumeralTickFormatter"},"plot":{"id":"afe5c18d-60bf-4b8a-be22-5f8ebb1fbdc1","subtype":"Figure","type":"Plot"},"ticker":{"id":"02aad1c0-636e-49a7-a139-633dc0db28b5","type":"BasicTicker"}},"id":"5965472f-b323-48ff-936e-1355c16f1cfd","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"fb2db9a5-5966-46e3-8b7f-50c0120b2ca2","type":"PanTool"},{"id":"71c95e8c-6fca-41d5-a3b9-ede9b6fe0418","type":"WheelZoomTool"},{"id":"ae38a12f-ca44-4de0-b560-8480bba83bc3","type":"BoxZoomTool"},{"id":"4a875a3c-b24d-4ac9-abab-92ea2d9cd447","type":"SaveTool"},{"id":"069b18f4-08a5-4793-adc5-409c734dcf6b","type":"ResetTool"},{"id":"1e8bba9e-bf3e-4cb1-8f18-50bbb5b060b0","type":"HelpTool"}]},"id":"d6b19545-08fc-4449-82a0-efb58199ee1c","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f1b064a2-583d-4af5-8e58-6d64c67d12e4","type":"Circle"},{"attributes":{},"id":"72f56e24-7759-44c2-b982-428ccf8378ae","type":"Selection"},{"attributes":{"plot":null,"text":""},"id":"ec9d5f67-2536-475f-836b-9d671cce0411","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"afe5c18d-60bf-4b8a-be22-5f8ebb1fbdc1","subtype":"Figure","type":"Plot"},"ticker":{"id":"02aad1c0-636e-49a7-a139-633dc0db28b5","type":"BasicTicker"}},"id":"624e7e9f-85e9-42b1-af02-14eb77a74302","type":"Grid"},{"attributes":{"plot":{"id":"afe5c18d-60bf-4b8a-be22-5f8ebb1fbdc1","subtype":"Figure","type":"Plot"},"ticker":{"id":"4226307c-230e-4026-9e7f-50642eb57aff","type":"BasicTicker"}},"id":"7c1dae96-5ef6-45ce-808d-d24752918a15","type":"Grid"},{"attributes":{"callback":null},"id":"c9c18d8a-50e1-448a-a730-90fb2d9de570","type":"DataRange1d"},{"attributes":{},"id":"069b18f4-08a5-4793-adc5-409c734dcf6b","type":"ResetTool"}],"root_ids":["afe5c18d-60bf-4b8a-be22-5f8ebb1fbdc1"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"c61edeb2-2b36-45f6-ab47-098a4a3e6181","roots":{"afe5c18d-60bf-4b8a-be22-5f8ebb1fbdc1":"6e6bcc70-5c00-4b24-bb3d-ae31ccca4928"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();