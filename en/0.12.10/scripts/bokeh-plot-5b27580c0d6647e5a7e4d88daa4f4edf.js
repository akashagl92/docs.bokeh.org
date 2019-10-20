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
      };var element = document.getElementById("ead53e5b-4056-4d3f-8b2d-1c81f8d0bd92");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ead53e5b-4056-4d3f-8b2d-1c81f8d0bd92' but no matching script tag was found. ")
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
                    var docs_json = {"97db9a1e-d2ce-4e9c-a0a2-c892862d314b":{"roots":{"references":[{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"820a5ec1-48b0-4bce-8e49-f3cad435a8b7","type":"Rect"},{"attributes":{"plot":{"id":"b47a0e17-d718-4fd9-a873-2f1dc61b3913","subtype":"Figure","type":"Plot"},"ticker":{"id":"b54f9243-99fa-4834-97a2-e9e071983caf","type":"BasicTicker"}},"id":"d316b33a-7769-4c5d-8f4a-9a249e55ee2d","type":"Grid"},{"attributes":{"overlay":{"id":"7bba0474-39bd-4b97-b2fb-74d0873c572d","type":"BoxAnnotation"}},"id":"1e1c5489-89a5-4b91-9373-0854a3a073a0","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"03380665-c86f-4243-a4fa-d9896a19378c","type":"Title"},{"attributes":{"data_source":{"id":"118efc1c-7a80-4cd5-8749-08a7d1c44c2d","type":"ColumnDataSource"},"glyph":{"id":"820a5ec1-48b0-4bce-8e49-f3cad435a8b7","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8692cdab-4f6a-49a9-89b0-2722ded9e684","type":"Rect"},"selection_glyph":null,"view":{"id":"ae13f35e-6410-4d17-b616-da9bef40d9fa","type":"CDSView"}},"id":"b22a2827-9e8f-43ce-bf3f-f9ee33578f75","type":"GlyphRenderer"},{"attributes":{},"id":"b54f9243-99fa-4834-97a2-e9e071983caf","type":"BasicTicker"},{"attributes":{},"id":"b3f70305-9092-4d7e-a9e8-713a375e910e","type":"HelpTool"},{"attributes":{"callback":null},"id":"55e6a82e-5886-4135-bacb-e26aeae5b91c","type":"DataRange1d"},{"attributes":{},"id":"7de05c48-388d-4533-b9f7-2234b610c024","type":"LinearScale"},{"attributes":{},"id":"b67952df-3ca3-4bd1-997c-438af086c43b","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c95bd78b-3bbf-4194-aa0e-cb1d8c493def","type":"PanTool"},{"id":"fe0638ad-2489-4829-9785-bb4f68744578","type":"WheelZoomTool"},{"id":"1e1c5489-89a5-4b91-9373-0854a3a073a0","type":"BoxZoomTool"},{"id":"b67952df-3ca3-4bd1-997c-438af086c43b","type":"SaveTool"},{"id":"1657c699-6208-406b-9477-1632dce6b077","type":"ResetTool"},{"id":"b3f70305-9092-4d7e-a9e8-713a375e910e","type":"HelpTool"}]},"id":"5321f48a-4d57-4aec-91eb-b7f0fdfd5eb8","type":"Toolbar"},{"attributes":{"callback":null},"id":"483068d5-ece2-41e2-aadc-1f682b6ed191","type":"DataRange1d"},{"attributes":{},"id":"c95bd78b-3bbf-4194-aa0e-cb1d8c493def","type":"PanTool"},{"attributes":{"formatter":{"id":"8f24acd2-53b2-4775-aab3-7257be2dc4a4","type":"BasicTickFormatter"},"plot":{"id":"b47a0e17-d718-4fd9-a873-2f1dc61b3913","subtype":"Figure","type":"Plot"},"ticker":{"id":"446e7f88-e142-402e-8470-9d1c7570c4d3","type":"BasicTicker"}},"id":"8fcebabd-51da-4a20-974e-df71a9f0ffbf","type":"LinearAxis"},{"attributes":{},"id":"fe0638ad-2489-4829-9785-bb4f68744578","type":"WheelZoomTool"},{"attributes":{},"id":"1657c699-6208-406b-9477-1632dce6b077","type":"ResetTool"},{"attributes":{},"id":"93bb9888-5aaa-4cc5-a304-bb073fd35688","type":"LinearScale"},{"attributes":{"formatter":{"id":"6526a1f2-b0a1-437a-b4e1-9ab4dbe82794","type":"BasicTickFormatter"},"plot":{"id":"b47a0e17-d718-4fd9-a873-2f1dc61b3913","subtype":"Figure","type":"Plot"},"ticker":{"id":"b54f9243-99fa-4834-97a2-e9e071983caf","type":"BasicTicker"}},"id":"3fe6404b-a030-4b96-b707-c25700b7da98","type":"LinearAxis"},{"attributes":{},"id":"8f24acd2-53b2-4775-aab3-7257be2dc4a4","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7bba0474-39bd-4b97-b2fb-74d0873c572d","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"118efc1c-7a80-4cd5-8749-08a7d1c44c2d","type":"ColumnDataSource"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"8692cdab-4f6a-49a9-89b0-2722ded9e684","type":"Rect"},{"attributes":{"dimension":1,"plot":{"id":"b47a0e17-d718-4fd9-a873-2f1dc61b3913","subtype":"Figure","type":"Plot"},"ticker":{"id":"446e7f88-e142-402e-8470-9d1c7570c4d3","type":"BasicTicker"}},"id":"a2461f94-427e-4526-b65d-c6a64b458b97","type":"Grid"},{"attributes":{},"id":"6526a1f2-b0a1-437a-b4e1-9ab4dbe82794","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"3fe6404b-a030-4b96-b707-c25700b7da98","type":"LinearAxis"}],"left":[{"id":"8fcebabd-51da-4a20-974e-df71a9f0ffbf","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3fe6404b-a030-4b96-b707-c25700b7da98","type":"LinearAxis"},{"id":"d316b33a-7769-4c5d-8f4a-9a249e55ee2d","type":"Grid"},{"id":"8fcebabd-51da-4a20-974e-df71a9f0ffbf","type":"LinearAxis"},{"id":"a2461f94-427e-4526-b65d-c6a64b458b97","type":"Grid"},{"id":"7bba0474-39bd-4b97-b2fb-74d0873c572d","type":"BoxAnnotation"},{"id":"b22a2827-9e8f-43ce-bf3f-f9ee33578f75","type":"GlyphRenderer"}],"title":{"id":"03380665-c86f-4243-a4fa-d9896a19378c","type":"Title"},"toolbar":{"id":"5321f48a-4d57-4aec-91eb-b7f0fdfd5eb8","type":"Toolbar"},"x_range":{"id":"55e6a82e-5886-4135-bacb-e26aeae5b91c","type":"DataRange1d"},"x_scale":{"id":"7de05c48-388d-4533-b9f7-2234b610c024","type":"LinearScale"},"y_range":{"id":"483068d5-ece2-41e2-aadc-1f682b6ed191","type":"DataRange1d"},"y_scale":{"id":"93bb9888-5aaa-4cc5-a304-bb073fd35688","type":"LinearScale"}},"id":"b47a0e17-d718-4fd9-a873-2f1dc61b3913","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"118efc1c-7a80-4cd5-8749-08a7d1c44c2d","type":"ColumnDataSource"}},"id":"ae13f35e-6410-4d17-b616-da9bef40d9fa","type":"CDSView"},{"attributes":{},"id":"446e7f88-e142-402e-8470-9d1c7570c4d3","type":"BasicTicker"}],"root_ids":["b47a0e17-d718-4fd9-a873-2f1dc61b3913"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"97db9a1e-d2ce-4e9c-a0a2-c892862d314b","elementid":"ead53e5b-4056-4d3f-8b2d-1c81f8d0bd92","modelid":"b47a0e17-d718-4fd9-a873-2f1dc61b3913"}];
                
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
