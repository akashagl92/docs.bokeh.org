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
      };var element = document.getElementById("e309be21-2917-4902-8980-bc6ee07ca281");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e309be21-2917-4902-8980-bc6ee07ca281' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"82110a1a-3b04-4c43-b187-636db2440857":{"roots":{"references":[{"attributes":{"callback":null},"id":"467b331b-9fa3-4168-a4fa-c1489dba9d6e","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"bc348545-9816-4dca-ad9d-7655f1b85433","subtype":"Figure","type":"Plot"},"ticker":{"id":"3aa79d4f-d0e4-4b3d-8745-b40105525d39","type":"BasicTicker"}},"id":"7490cfe9-8235-4877-a7d5-0a45825371a7","type":"Grid"},{"attributes":{},"id":"e625aaef-a5f1-44ca-b110-3426e5134f27","type":"LinearScale"},{"attributes":{},"id":"3a6cd7ab-ebb8-4232-8afd-0fcec4fe6334","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"a3afea06-8327-4db1-b0c3-c0c78954724e","type":"Diamond"},{"attributes":{},"id":"2594dd44-d5ea-49bc-a102-923cdd94c402","type":"LinearScale"},{"attributes":{},"id":"cbb8c536-5812-4373-b8e7-580714f4ee00","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1C9099"},"line_color":{"value":"#1C9099"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"3f1c852a-52df-4875-bd8a-3cdf1b2f6533","type":"Diamond"},{"attributes":{"plot":{"id":"bc348545-9816-4dca-ad9d-7655f1b85433","subtype":"Figure","type":"Plot"},"ticker":{"id":"cc9ae2ab-bbe4-4dd4-a01a-630640225fc7","type":"BasicTicker"}},"id":"b42140d0-7349-4cfb-b40d-cac4a468dc6a","type":"Grid"},{"attributes":{"source":{"id":"9a97a803-6924-4313-a88d-5eda64c1a6f7","type":"ColumnDataSource"}},"id":"320a516b-ff29-4d60-bd1d-ea666e9b2b0a","type":"CDSView"},{"attributes":{"formatter":{"id":"de5a3f3f-f81b-496d-823e-bf469b2a7744","type":"BasicTickFormatter"},"plot":{"id":"bc348545-9816-4dca-ad9d-7655f1b85433","subtype":"Figure","type":"Plot"},"ticker":{"id":"3aa79d4f-d0e4-4b3d-8745-b40105525d39","type":"BasicTicker"}},"id":"e7f31879-1bb7-4dd1-b718-87ae9a461f2d","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"f5a57b6f-576e-4791-9c9a-cdefc96c0d4a","type":"Selection"},"selection_policy":{"id":"681ad2af-b630-4bb1-8c29-ae8d0a8a6fa0","type":"UnionRenderers"}},"id":"9a97a803-6924-4313-a88d-5eda64c1a6f7","type":"ColumnDataSource"},{"attributes":{},"id":"681ad2af-b630-4bb1-8c29-ae8d0a8a6fa0","type":"UnionRenderers"},{"attributes":{},"id":"3aa79d4f-d0e4-4b3d-8745-b40105525d39","type":"BasicTicker"},{"attributes":{"data_source":{"id":"9a97a803-6924-4313-a88d-5eda64c1a6f7","type":"ColumnDataSource"},"glyph":{"id":"3f1c852a-52df-4875-bd8a-3cdf1b2f6533","type":"Diamond"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a3afea06-8327-4db1-b0c3-c0c78954724e","type":"Diamond"},"selection_glyph":null,"view":{"id":"320a516b-ff29-4d60-bd1d-ea666e9b2b0a","type":"CDSView"}},"id":"24593cd0-ce03-4a94-9994-a7856d0c922d","type":"GlyphRenderer"},{"attributes":{},"id":"d02828af-303a-4ca5-a78f-37c8c6336579","type":"PanTool"},{"attributes":{"overlay":{"id":"dc52dd26-27e7-43fe-ac23-4b93cde4605c","type":"BoxAnnotation"}},"id":"d659fdea-7696-4e1b-8a5f-5cabbd5efc72","type":"BoxZoomTool"},{"attributes":{},"id":"c8e01995-2704-4efa-a8a5-5c97248aff0f","type":"HelpTool"},{"attributes":{},"id":"0109e303-64d5-4899-9ca8-da24fcf1348d","type":"WheelZoomTool"},{"attributes":{},"id":"de5a3f3f-f81b-496d-823e-bf469b2a7744","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"9f026460-6091-45fc-ab37-e5f10e8f13e8","type":"LinearAxis"}],"left":[{"id":"e7f31879-1bb7-4dd1-b718-87ae9a461f2d","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"9f026460-6091-45fc-ab37-e5f10e8f13e8","type":"LinearAxis"},{"id":"b42140d0-7349-4cfb-b40d-cac4a468dc6a","type":"Grid"},{"id":"e7f31879-1bb7-4dd1-b718-87ae9a461f2d","type":"LinearAxis"},{"id":"7490cfe9-8235-4877-a7d5-0a45825371a7","type":"Grid"},{"id":"dc52dd26-27e7-43fe-ac23-4b93cde4605c","type":"BoxAnnotation"},{"id":"24593cd0-ce03-4a94-9994-a7856d0c922d","type":"GlyphRenderer"}],"title":{"id":"f366b823-7f93-4992-a82a-3f0459de8f28","type":"Title"},"toolbar":{"id":"7bf0b51c-663c-4a55-aa12-29a8ddf9210e","type":"Toolbar"},"x_range":{"id":"ee55b18a-ade5-4fd1-a4b7-a6e3529254d4","type":"DataRange1d"},"x_scale":{"id":"e625aaef-a5f1-44ca-b110-3426e5134f27","type":"LinearScale"},"y_range":{"id":"467b331b-9fa3-4168-a4fa-c1489dba9d6e","type":"DataRange1d"},"y_scale":{"id":"2594dd44-d5ea-49bc-a102-923cdd94c402","type":"LinearScale"}},"id":"bc348545-9816-4dca-ad9d-7655f1b85433","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"f366b823-7f93-4992-a82a-3f0459de8f28","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"dc52dd26-27e7-43fe-ac23-4b93cde4605c","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"d02828af-303a-4ca5-a78f-37c8c6336579","type":"PanTool"},{"id":"0109e303-64d5-4899-9ca8-da24fcf1348d","type":"WheelZoomTool"},{"id":"d659fdea-7696-4e1b-8a5f-5cabbd5efc72","type":"BoxZoomTool"},{"id":"cbb8c536-5812-4373-b8e7-580714f4ee00","type":"SaveTool"},{"id":"3a6cd7ab-ebb8-4232-8afd-0fcec4fe6334","type":"ResetTool"},{"id":"c8e01995-2704-4efa-a8a5-5c97248aff0f","type":"HelpTool"}]},"id":"7bf0b51c-663c-4a55-aa12-29a8ddf9210e","type":"Toolbar"},{"attributes":{"callback":null},"id":"ee55b18a-ade5-4fd1-a4b7-a6e3529254d4","type":"DataRange1d"},{"attributes":{},"id":"cc9ae2ab-bbe4-4dd4-a01a-630640225fc7","type":"BasicTicker"},{"attributes":{},"id":"a2beb0c4-1936-4170-9bf5-984d7bc36b6c","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"a2beb0c4-1936-4170-9bf5-984d7bc36b6c","type":"BasicTickFormatter"},"plot":{"id":"bc348545-9816-4dca-ad9d-7655f1b85433","subtype":"Figure","type":"Plot"},"ticker":{"id":"cc9ae2ab-bbe4-4dd4-a01a-630640225fc7","type":"BasicTicker"}},"id":"9f026460-6091-45fc-ab37-e5f10e8f13e8","type":"LinearAxis"},{"attributes":{},"id":"f5a57b6f-576e-4791-9c9a-cdefc96c0d4a","type":"Selection"}],"root_ids":["bc348545-9816-4dca-ad9d-7655f1b85433"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"82110a1a-3b04-4c43-b187-636db2440857","roots":{"bc348545-9816-4dca-ad9d-7655f1b85433":"e309be21-2917-4902-8980-bc6ee07ca281"}}];
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