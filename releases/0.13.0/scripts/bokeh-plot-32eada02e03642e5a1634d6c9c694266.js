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
      };var element = document.getElementById("2d12cd67-dfbb-4025-850a-0ea7085cc90c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2d12cd67-dfbb-4025-850a-0ea7085cc90c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2b1d98d3-cc1e-4f23-bfe0-b193f26a2e82":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"37f0cf36-def6-4de2-b448-52d3a98f48a9","type":"PanTool"},{"id":"68eaf7fe-5558-4a2a-b37c-57407cf91701","type":"WheelZoomTool"},{"id":"df2b5510-fb29-49b2-9c4d-fa87976b2963","type":"BoxZoomTool"},{"id":"acc89296-4921-4cae-b174-5ea91bfd5040","type":"SaveTool"},{"id":"7e647f6c-145d-467a-9225-ab99b2514f12","type":"ResetTool"},{"id":"41e56449-8a4b-4c50-bc29-7d8226b8fc3d","type":"HelpTool"}]},"id":"3825bd53-2c77-466c-97ff-59784ff933f2","type":"Toolbar"},{"attributes":{"source":{"id":"ef1f6baa-c8bd-40d5-9d97-0bba59900974","type":"ColumnDataSource"}},"id":"d1c75ce1-6981-48bc-8d27-774ab69a6d04","type":"CDSView"},{"attributes":{"formatter":{"id":"3549bd99-d210-4f3d-bfc4-44eabc91e576","type":"BasicTickFormatter"},"plot":{"id":"cc5a5de4-c333-4e68-979a-805c9bbf64a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d3699da-77f0-4988-8972-159a5188ed8b","type":"BasicTicker"}},"id":"985e8fea-7cae-471d-9b04-02079622f93c","type":"LinearAxis"},{"attributes":{},"id":"68eaf7fe-5558-4a2a-b37c-57407cf91701","type":"WheelZoomTool"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"9376af4d-a25d-415d-bc47-48a1b28b9a0f","type":"Arc"},{"attributes":{"callback":null},"id":"9369db51-cebe-479d-9347-5e675e8d2341","type":"DataRange1d"},{"attributes":{"overlay":{"id":"77d419d1-f5fc-4afe-ab8a-4b0da2eb6e97","type":"BoxAnnotation"}},"id":"df2b5510-fb29-49b2-9c4d-fa87976b2963","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"cc5a5de4-c333-4e68-979a-805c9bbf64a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d3699da-77f0-4988-8972-159a5188ed8b","type":"BasicTicker"}},"id":"ce36cb12-c178-4b3e-8b51-7025a4e29406","type":"Grid"},{"attributes":{},"id":"5e2990b0-9acc-4e17-9a1f-e35460d62bb8","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"3d49d2bf-0d35-4a39-9e70-55b0fdf5a44a","type":"DataRange1d"},{"attributes":{},"id":"3549bd99-d210-4f3d-bfc4-44eabc91e576","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"356d30e6-e12c-43ec-8a3e-234c33654d67","type":"Title"},{"attributes":{},"id":"c259725f-2d47-406f-9d92-6745f0a20d39","type":"LinearScale"},{"attributes":{},"id":"7e647f6c-145d-467a-9225-ab99b2514f12","type":"ResetTool"},{"attributes":{},"id":"f5788c6b-7833-4174-b40a-58081815ed62","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"12e00ee0-0e18-4dd8-bd52-28944f9e06f2","type":"Selection"},"selection_policy":{"id":"5e2990b0-9acc-4e17-9a1f-e35460d62bb8","type":"UnionRenderers"}},"id":"ef1f6baa-c8bd-40d5-9d97-0bba59900974","type":"ColumnDataSource"},{"attributes":{},"id":"6d3699da-77f0-4988-8972-159a5188ed8b","type":"BasicTicker"},{"attributes":{"data_source":{"id":"ef1f6baa-c8bd-40d5-9d97-0bba59900974","type":"ColumnDataSource"},"glyph":{"id":"9665b384-1591-47f6-ab89-3089b957096d","type":"Arc"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9376af4d-a25d-415d-bc47-48a1b28b9a0f","type":"Arc"},"selection_glyph":null,"view":{"id":"d1c75ce1-6981-48bc-8d27-774ab69a6d04","type":"CDSView"}},"id":"8f6f0346-18d8-4f90-9f3f-cbdec5a7bc70","type":"GlyphRenderer"},{"attributes":{},"id":"12e00ee0-0e18-4dd8-bd52-28944f9e06f2","type":"Selection"},{"attributes":{"formatter":{"id":"3c530a39-a5a5-4c76-be09-7d8de4c89eb2","type":"BasicTickFormatter"},"plot":{"id":"cc5a5de4-c333-4e68-979a-805c9bbf64a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"c950ebec-10fb-429c-959e-4d74ebd060af","type":"BasicTicker"}},"id":"a8f1eb3d-cf11-4fa7-85c3-d8c69eb8ffce","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"77d419d1-f5fc-4afe-ab8a-4b0da2eb6e97","type":"BoxAnnotation"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_color":{"value":"navy"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"9665b384-1591-47f6-ab89-3089b957096d","type":"Arc"},{"attributes":{},"id":"c950ebec-10fb-429c-959e-4d74ebd060af","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"cc5a5de4-c333-4e68-979a-805c9bbf64a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"c950ebec-10fb-429c-959e-4d74ebd060af","type":"BasicTicker"}},"id":"71ff7f81-84fd-4777-bbbb-567cdc1550f8","type":"Grid"},{"attributes":{},"id":"acc89296-4921-4cae-b174-5ea91bfd5040","type":"SaveTool"},{"attributes":{},"id":"3c530a39-a5a5-4c76-be09-7d8de4c89eb2","type":"BasicTickFormatter"},{"attributes":{},"id":"41e56449-8a4b-4c50-bc29-7d8226b8fc3d","type":"HelpTool"},{"attributes":{"below":[{"id":"985e8fea-7cae-471d-9b04-02079622f93c","type":"LinearAxis"}],"left":[{"id":"a8f1eb3d-cf11-4fa7-85c3-d8c69eb8ffce","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"985e8fea-7cae-471d-9b04-02079622f93c","type":"LinearAxis"},{"id":"ce36cb12-c178-4b3e-8b51-7025a4e29406","type":"Grid"},{"id":"a8f1eb3d-cf11-4fa7-85c3-d8c69eb8ffce","type":"LinearAxis"},{"id":"71ff7f81-84fd-4777-bbbb-567cdc1550f8","type":"Grid"},{"id":"77d419d1-f5fc-4afe-ab8a-4b0da2eb6e97","type":"BoxAnnotation"},{"id":"8f6f0346-18d8-4f90-9f3f-cbdec5a7bc70","type":"GlyphRenderer"}],"title":{"id":"356d30e6-e12c-43ec-8a3e-234c33654d67","type":"Title"},"toolbar":{"id":"3825bd53-2c77-466c-97ff-59784ff933f2","type":"Toolbar"},"x_range":{"id":"9369db51-cebe-479d-9347-5e675e8d2341","type":"DataRange1d"},"x_scale":{"id":"c259725f-2d47-406f-9d92-6745f0a20d39","type":"LinearScale"},"y_range":{"id":"3d49d2bf-0d35-4a39-9e70-55b0fdf5a44a","type":"DataRange1d"},"y_scale":{"id":"f5788c6b-7833-4174-b40a-58081815ed62","type":"LinearScale"}},"id":"cc5a5de4-c333-4e68-979a-805c9bbf64a5","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"37f0cf36-def6-4de2-b448-52d3a98f48a9","type":"PanTool"}],"root_ids":["cc5a5de4-c333-4e68-979a-805c9bbf64a5"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"2b1d98d3-cc1e-4f23-bfe0-b193f26a2e82","roots":{"cc5a5de4-c333-4e68-979a-805c9bbf64a5":"2d12cd67-dfbb-4025-850a-0ea7085cc90c"}}];
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