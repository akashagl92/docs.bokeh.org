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
      };var element = document.getElementById("4b02ceb2-5c62-4779-b7e8-892263474a6a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4b02ceb2-5c62-4779-b7e8-892263474a6a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"27eb4300-c90d-401e-a637-ce8145d2a3d0":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"0cf5d062-a864-4373-9cc4-707ba7bbd6e8","subtype":"Figure","type":"Plot"},"ticker":{"id":"4d569170-0917-4baf-b3f1-d19528a39679","type":"BasicTicker"}},"id":"0e89adc9-6a1f-4e91-aee7-ce44581818a3","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"454326a8-e1b6-4b1a-b7ae-3d00affffd4b","type":"Asterisk"},{"attributes":{"below":[{"id":"7dd5bce8-18ee-4bc2-8bc5-065c452b06cd","type":"LinearAxis"}],"left":[{"id":"0db7c5cc-8e1c-48eb-bfe1-adbc6c3a4646","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"7dd5bce8-18ee-4bc2-8bc5-065c452b06cd","type":"LinearAxis"},{"id":"e9c1371f-6f67-4ef3-9390-d795adb36f93","type":"Grid"},{"id":"0db7c5cc-8e1c-48eb-bfe1-adbc6c3a4646","type":"LinearAxis"},{"id":"0e89adc9-6a1f-4e91-aee7-ce44581818a3","type":"Grid"},{"id":"1f318af6-a858-441c-9930-73e36961fcfa","type":"BoxAnnotation"},{"id":"14686dba-37fe-4915-af9b-b12a08334121","type":"GlyphRenderer"}],"title":{"id":"ebe5f0d8-4231-4c4c-aa5e-6f7ba3f57081","type":"Title"},"toolbar":{"id":"853a821d-9a07-49d9-80e0-89e652b54dca","type":"Toolbar"},"x_range":{"id":"21a24707-69cd-4f61-8d05-5d52ea0b3ab3","type":"DataRange1d"},"x_scale":{"id":"197b4386-edac-41df-a62b-c915900e1543","type":"LinearScale"},"y_range":{"id":"6a91e8b1-de55-4745-8d42-96787c4101a5","type":"DataRange1d"},"y_scale":{"id":"4a75cd7b-185c-4a21-8c84-6349555c1338","type":"LinearScale"}},"id":"0cf5d062-a864-4373-9cc4-707ba7bbd6e8","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"9b02f5e7-202a-4908-8bee-c7ff0ff6ed75","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9b02f5e7-202a-4908-8bee-c7ff0ff6ed75","type":"ColumnDataSource"},"glyph":{"id":"cea85935-a9da-4009-903d-4a2e7edf81a0","type":"Asterisk"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"454326a8-e1b6-4b1a-b7ae-3d00affffd4b","type":"Asterisk"},"selection_glyph":null,"view":{"id":"7edd0cbe-c83a-48af-9758-f764a8bfbc17","type":"CDSView"}},"id":"14686dba-37fe-4915-af9b-b12a08334121","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1f318af6-a858-441c-9930-73e36961fcfa","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b2aedf5c-a70e-42fb-bfcd-310f59d0160e","type":"PanTool"},{"id":"c0899692-9488-4d73-8fd7-06cae55e8697","type":"WheelZoomTool"},{"id":"918e163f-a4f3-4f90-9862-bd8638b97f12","type":"BoxZoomTool"},{"id":"c6ffcf23-36c0-4613-8a4d-8a92f3eb43d7","type":"SaveTool"},{"id":"dd600e52-9e8a-4b26-8c30-f061884c0ab7","type":"ResetTool"},{"id":"3cb185ae-33a5-4351-91b1-7309c33a8c49","type":"HelpTool"}]},"id":"853a821d-9a07-49d9-80e0-89e652b54dca","type":"Toolbar"},{"attributes":{},"id":"b2aedf5c-a70e-42fb-bfcd-310f59d0160e","type":"PanTool"},{"attributes":{"callback":null},"id":"21a24707-69cd-4f61-8d05-5d52ea0b3ab3","type":"DataRange1d"},{"attributes":{"source":{"id":"9b02f5e7-202a-4908-8bee-c7ff0ff6ed75","type":"ColumnDataSource"}},"id":"7edd0cbe-c83a-48af-9758-f764a8bfbc17","type":"CDSView"},{"attributes":{},"id":"c0899692-9488-4d73-8fd7-06cae55e8697","type":"WheelZoomTool"},{"attributes":{},"id":"7bcd1078-0ca9-4594-8fe8-c35b11e56614","type":"BasicTicker"},{"attributes":{"overlay":{"id":"1f318af6-a858-441c-9930-73e36961fcfa","type":"BoxAnnotation"}},"id":"918e163f-a4f3-4f90-9862-bd8638b97f12","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#F0027F"},"line_color":{"value":"#F0027F"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"cea85935-a9da-4009-903d-4a2e7edf81a0","type":"Asterisk"},{"attributes":{},"id":"c6ffcf23-36c0-4613-8a4d-8a92f3eb43d7","type":"SaveTool"},{"attributes":{"formatter":{"id":"13ef91c5-e344-4cb8-a646-06f5c16c62f6","type":"BasicTickFormatter"},"plot":{"id":"0cf5d062-a864-4373-9cc4-707ba7bbd6e8","subtype":"Figure","type":"Plot"},"ticker":{"id":"7bcd1078-0ca9-4594-8fe8-c35b11e56614","type":"BasicTicker"}},"id":"7dd5bce8-18ee-4bc2-8bc5-065c452b06cd","type":"LinearAxis"},{"attributes":{},"id":"dd600e52-9e8a-4b26-8c30-f061884c0ab7","type":"ResetTool"},{"attributes":{"callback":null},"id":"6a91e8b1-de55-4745-8d42-96787c4101a5","type":"DataRange1d"},{"attributes":{},"id":"3cb185ae-33a5-4351-91b1-7309c33a8c49","type":"HelpTool"},{"attributes":{},"id":"197b4386-edac-41df-a62b-c915900e1543","type":"LinearScale"},{"attributes":{},"id":"d0b845da-b2c5-4533-820c-8a09e54356ad","type":"BasicTickFormatter"},{"attributes":{},"id":"4a75cd7b-185c-4a21-8c84-6349555c1338","type":"LinearScale"},{"attributes":{"plot":{"id":"0cf5d062-a864-4373-9cc4-707ba7bbd6e8","subtype":"Figure","type":"Plot"},"ticker":{"id":"7bcd1078-0ca9-4594-8fe8-c35b11e56614","type":"BasicTicker"}},"id":"e9c1371f-6f67-4ef3-9390-d795adb36f93","type":"Grid"},{"attributes":{"formatter":{"id":"d0b845da-b2c5-4533-820c-8a09e54356ad","type":"BasicTickFormatter"},"plot":{"id":"0cf5d062-a864-4373-9cc4-707ba7bbd6e8","subtype":"Figure","type":"Plot"},"ticker":{"id":"4d569170-0917-4baf-b3f1-d19528a39679","type":"BasicTicker"}},"id":"0db7c5cc-8e1c-48eb-bfe1-adbc6c3a4646","type":"LinearAxis"},{"attributes":{},"id":"4d569170-0917-4baf-b3f1-d19528a39679","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"ebe5f0d8-4231-4c4c-aa5e-6f7ba3f57081","type":"Title"},{"attributes":{},"id":"13ef91c5-e344-4cb8-a646-06f5c16c62f6","type":"BasicTickFormatter"}],"root_ids":["0cf5d062-a864-4373-9cc4-707ba7bbd6e8"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"27eb4300-c90d-401e-a637-ce8145d2a3d0","elementid":"4b02ceb2-5c62-4779-b7e8-892263474a6a","modelid":"0cf5d062-a864-4373-9cc4-707ba7bbd6e8"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
