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
      };var element = document.getElementById("884c3e24-ee1b-4a35-b440-414ba1924ed9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '884c3e24-ee1b-4a35-b440-414ba1924ed9' but no matching script tag was found. ")
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
                    var docs_json = {"af9138b2-2bfc-4d6e-87a4-05004d2f3d7b":{"roots":{"references":[{"attributes":{"formatter":{"id":"02eddc75-b696-49c5-bea6-1c9d493eb5e7","type":"BasicTickFormatter"},"plot":{"id":"03c69c1d-0729-46dc-b643-f1d168079e85","subtype":"Figure","type":"Plot"},"ticker":{"id":"a37c697f-6172-4a40-bcd7-31af5d05eb7a","type":"BasicTicker"}},"id":"cc156359-e9b8-4d9e-8717-b525b242950e","type":"LinearAxis"},{"attributes":{},"id":"4942a1af-7aa9-48d7-8ac9-f5a049627f79","type":"HelpTool"},{"attributes":{},"id":"a37c697f-6172-4a40-bcd7-31af5d05eb7a","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"03c69c1d-0729-46dc-b643-f1d168079e85","subtype":"Figure","type":"Plot"},"ticker":{"id":"a37c697f-6172-4a40-bcd7-31af5d05eb7a","type":"BasicTicker"}},"id":"e54093f4-1714-4bb5-bee1-d4f4d6c8b58d","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"b5e21d59-e6e9-4a70-874a-99dcf832929d","type":"ColumnDataSource"},{"attributes":{"source":{"id":"b5e21d59-e6e9-4a70-874a-99dcf832929d","type":"ColumnDataSource"}},"id":"a9a9fd95-cd5f-4e0f-a7fb-f237ca70a9b9","type":"CDSView"},{"attributes":{"data_source":{"id":"b5e21d59-e6e9-4a70-874a-99dcf832929d","type":"ColumnDataSource"},"glyph":{"id":"3064acef-a1fd-4108-adde-8d9fe35b47f1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9450b9b0-776b-4768-bdc8-b8e634061f51","type":"Circle"},"selection_glyph":null,"view":{"id":"a9a9fd95-cd5f-4e0f-a7fb-f237ca70a9b9","type":"CDSView"}},"id":"dbc09b4a-1c07-41c1-8415-b97971776840","type":"GlyphRenderer"},{"attributes":{},"id":"e0d2bd6a-2abc-4903-8577-308e747edce3","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"b84497b5-d3a5-4f84-9fe9-bff1cc737194","type":"LinearAxis"}],"left":[{"id":"cc156359-e9b8-4d9e-8717-b525b242950e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b84497b5-d3a5-4f84-9fe9-bff1cc737194","type":"LinearAxis"},{"id":"c267f5e7-628d-4b0d-a54e-b1b9506cff30","type":"Grid"},{"id":"cc156359-e9b8-4d9e-8717-b525b242950e","type":"LinearAxis"},{"id":"e54093f4-1714-4bb5-bee1-d4f4d6c8b58d","type":"Grid"},{"id":"b2ca6e16-2a94-4e9a-97fe-1aa116bc8d19","type":"BoxAnnotation"},{"id":"dbc09b4a-1c07-41c1-8415-b97971776840","type":"GlyphRenderer"}],"title":{"id":"ea662a44-6680-4821-989f-e68d4dbc9a8c","type":"Title"},"toolbar":{"id":"f31f8f31-97c8-4454-b28c-be47c1f764aa","type":"Toolbar"},"x_range":{"id":"ac00c625-5cf2-436a-82d7-863b68138ead","type":"DataRange1d"},"x_scale":{"id":"561092f3-f392-4eb3-ba3b-5eed7aa654e5","type":"LinearScale"},"y_range":{"id":"4ead5679-b0d2-463c-b0ce-aa5774a624a0","type":"DataRange1d"},"y_scale":{"id":"4b86b67c-e8b6-47aa-8c33-3d03178877b3","type":"LinearScale"}},"id":"03c69c1d-0729-46dc-b643-f1d168079e85","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"b2ca6e16-2a94-4e9a-97fe-1aa116bc8d19","type":"BoxAnnotation"}},"id":"568a58cd-cf99-4a4a-a901-fcd48326caed","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":"Some Title","text_color":{"value":"olive"},"text_font":"times","text_font_style":"italic"},"id":"ea662a44-6680-4821-989f-e68d4dbc9a8c","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b2ca6e16-2a94-4e9a-97fe-1aa116bc8d19","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"ac00c625-5cf2-436a-82d7-863b68138ead","type":"DataRange1d"},{"attributes":{},"id":"da93786e-68fe-4ca9-83bf-6f062974dbc6","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"478bf209-d114-466b-9eb2-f8e252a855be","type":"PanTool"},{"id":"e0d2bd6a-2abc-4903-8577-308e747edce3","type":"WheelZoomTool"},{"id":"568a58cd-cf99-4a4a-a901-fcd48326caed","type":"BoxZoomTool"},{"id":"da93786e-68fe-4ca9-83bf-6f062974dbc6","type":"SaveTool"},{"id":"d3a62ab6-fa7e-4567-a7d7-c2538d8e227a","type":"ResetTool"},{"id":"4942a1af-7aa9-48d7-8ac9-f5a049627f79","type":"HelpTool"}]},"id":"f31f8f31-97c8-4454-b28c-be47c1f764aa","type":"Toolbar"},{"attributes":{},"id":"72986041-d8a0-403e-ab03-554cc9721d57","type":"BasicTickFormatter"},{"attributes":{},"id":"561092f3-f392-4eb3-ba3b-5eed7aa654e5","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3064acef-a1fd-4108-adde-8d9fe35b47f1","type":"Circle"},{"attributes":{},"id":"02eddc75-b696-49c5-bea6-1c9d493eb5e7","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"4ead5679-b0d2-463c-b0ce-aa5774a624a0","type":"DataRange1d"},{"attributes":{},"id":"d3a62ab6-fa7e-4567-a7d7-c2538d8e227a","type":"ResetTool"},{"attributes":{},"id":"4b86b67c-e8b6-47aa-8c33-3d03178877b3","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9450b9b0-776b-4768-bdc8-b8e634061f51","type":"Circle"},{"attributes":{"plot":{"id":"03c69c1d-0729-46dc-b643-f1d168079e85","subtype":"Figure","type":"Plot"},"ticker":{"id":"7adce5b5-ec1d-4887-90ae-ddc528b4dfd9","type":"BasicTicker"}},"id":"c267f5e7-628d-4b0d-a54e-b1b9506cff30","type":"Grid"},{"attributes":{"formatter":{"id":"72986041-d8a0-403e-ab03-554cc9721d57","type":"BasicTickFormatter"},"plot":{"id":"03c69c1d-0729-46dc-b643-f1d168079e85","subtype":"Figure","type":"Plot"},"ticker":{"id":"7adce5b5-ec1d-4887-90ae-ddc528b4dfd9","type":"BasicTicker"}},"id":"b84497b5-d3a5-4f84-9fe9-bff1cc737194","type":"LinearAxis"},{"attributes":{},"id":"7adce5b5-ec1d-4887-90ae-ddc528b4dfd9","type":"BasicTicker"},{"attributes":{},"id":"478bf209-d114-466b-9eb2-f8e252a855be","type":"PanTool"}],"root_ids":["03c69c1d-0729-46dc-b643-f1d168079e85"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"af9138b2-2bfc-4d6e-87a4-05004d2f3d7b","elementid":"884c3e24-ee1b-4a35-b440-414ba1924ed9","modelid":"03c69c1d-0729-46dc-b643-f1d168079e85"}];
                
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
