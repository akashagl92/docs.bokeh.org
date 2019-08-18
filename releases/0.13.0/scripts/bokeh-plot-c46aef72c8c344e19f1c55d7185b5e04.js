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
      };var element = document.getElementById("417f5136-85fc-4890-8d64-dbec05a863c5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '417f5136-85fc-4890-8d64-dbec05a863c5' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"573695dd-2957-4264-b99c-a010406c33da":{"roots":{"references":[{"attributes":{},"id":"7ba0aad2-0250-475f-a3f1-a2983c0f28aa","type":"Selection"},{"attributes":{"callback":null},"id":"0afa5b29-0433-4c54-bcfe-12893995474d","type":"DataRange1d"},{"attributes":{"data_source":{"id":"1ccff8ca-1c8e-4eb8-91d6-ecbbbd972784","type":"ColumnDataSource"},"glyph":{"id":"55ee760d-3dbf-4b39-b741-57382bf8dff6","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9129ca18-7898-4567-9fdd-5c56e01d7aab","type":"Circle"},"selection_glyph":null,"view":{"id":"aec3aac9-7be7-45c9-a050-ef4ed0eb4717","type":"CDSView"}},"id":"67941a78-0cab-4193-a63a-5ebece9b87f3","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"14aec442-40ea-444b-97ed-eec807c2749b","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9129ca18-7898-4567-9fdd-5c56e01d7aab","type":"Circle"},{"attributes":{},"id":"9b4dd599-ea74-4522-b999-845a3c4c41d8","type":"BasicTicker"},{"attributes":{},"id":"e2136b21-6961-44b9-937d-f66dade63c7f","type":"BasicTicker"},{"attributes":{},"id":"87d28845-23a5-432c-b623-a54a7fc19c73","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"87d28845-23a5-432c-b623-a54a7fc19c73","type":"PanTool"},{"id":"1fb57535-3706-4ace-8574-dc41ae65add8","type":"WheelZoomTool"},{"id":"a7a10470-cc40-4289-bed3-961d90677cd9","type":"BoxZoomTool"},{"id":"9574f397-f937-4a25-9b91-fb626ef061ad","type":"SaveTool"},{"id":"7ff0eb8e-4415-4432-8927-4bdd83a31526","type":"ResetTool"},{"id":"8c26f12b-14b4-4b02-abdc-e14a213561c7","type":"HelpTool"}]},"id":"8ce3c402-c202-4ea3-a6d6-dd02359a6454","type":"Toolbar"},{"attributes":{},"id":"9574f397-f937-4a25-9b91-fb626ef061ad","type":"SaveTool"},{"attributes":{"plot":{"id":"7b918392-91d2-4aaf-9a26-11b4a64eaee9","subtype":"Figure","type":"Plot"},"ticker":{"id":"9b4dd599-ea74-4522-b999-845a3c4c41d8","type":"BasicTicker"}},"id":"d6622fb4-5298-4efd-bc6c-c6dd62a0df46","type":"Grid"},{"attributes":{},"id":"5b481160-d6c1-4fe6-95ad-5d1c1c8ffa51","type":"BasicTickFormatter"},{"attributes":{},"id":"1fb57535-3706-4ace-8574-dc41ae65add8","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"5b481160-d6c1-4fe6-95ad-5d1c1c8ffa51","type":"BasicTickFormatter"},"plot":{"id":"7b918392-91d2-4aaf-9a26-11b4a64eaee9","subtype":"Figure","type":"Plot"},"ticker":{"id":"9b4dd599-ea74-4522-b999-845a3c4c41d8","type":"BasicTicker"}},"id":"8eb0afc2-9329-46a0-8e84-8ad7523fa210","type":"LinearAxis"},{"attributes":{"overlay":{"id":"2a6465c2-66ea-45ea-9a3a-70555ca84eba","type":"BoxAnnotation"}},"id":"a7a10470-cc40-4289-bed3-961d90677cd9","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"1d48689d-875e-4085-88c7-44154cc6d727","type":"BasicTickFormatter"},"plot":{"id":"7b918392-91d2-4aaf-9a26-11b4a64eaee9","subtype":"Figure","type":"Plot"},"ticker":{"id":"e2136b21-6961-44b9-937d-f66dade63c7f","type":"BasicTicker"}},"id":"7970e278-9a1e-40e1-9559-b2e6ce0f7847","type":"LinearAxis"},{"attributes":{},"id":"a90b99c8-5218-453f-b82e-7632d8c9d9b4","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"55ee760d-3dbf-4b39-b741-57382bf8dff6","type":"Circle"},{"attributes":{},"id":"7ff0eb8e-4415-4432-8927-4bdd83a31526","type":"ResetTool"},{"attributes":{},"id":"ec5203a5-c264-4eb9-a058-0d5003e0a107","type":"LinearScale"},{"attributes":{"source":{"id":"1ccff8ca-1c8e-4eb8-91d6-ecbbbd972784","type":"ColumnDataSource"}},"id":"aec3aac9-7be7-45c9-a050-ef4ed0eb4717","type":"CDSView"},{"attributes":{"background_fill_alpha":{"value":0.5},"background_fill_color":{"value":"beige"},"below":[{"id":"8eb0afc2-9329-46a0-8e84-8ad7523fa210","type":"LinearAxis"}],"left":[{"id":"7970e278-9a1e-40e1-9559-b2e6ce0f7847","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8eb0afc2-9329-46a0-8e84-8ad7523fa210","type":"LinearAxis"},{"id":"d6622fb4-5298-4efd-bc6c-c6dd62a0df46","type":"Grid"},{"id":"7970e278-9a1e-40e1-9559-b2e6ce0f7847","type":"LinearAxis"},{"id":"23739cef-e06c-4ba1-ad72-351a82622e56","type":"Grid"},{"id":"2a6465c2-66ea-45ea-9a3a-70555ca84eba","type":"BoxAnnotation"},{"id":"67941a78-0cab-4193-a63a-5ebece9b87f3","type":"GlyphRenderer"}],"title":{"id":"2bb3a62d-57cc-46d4-a71b-27ef5800796a","type":"Title"},"toolbar":{"id":"8ce3c402-c202-4ea3-a6d6-dd02359a6454","type":"Toolbar"},"x_range":{"id":"14aec442-40ea-444b-97ed-eec807c2749b","type":"DataRange1d"},"x_scale":{"id":"96cb0050-2490-4b69-acde-736818da0e92","type":"LinearScale"},"y_range":{"id":"0afa5b29-0433-4c54-bcfe-12893995474d","type":"DataRange1d"},"y_scale":{"id":"ec5203a5-c264-4eb9-a058-0d5003e0a107","type":"LinearScale"}},"id":"7b918392-91d2-4aaf-9a26-11b4a64eaee9","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"7ba0aad2-0250-475f-a3f1-a2983c0f28aa","type":"Selection"},"selection_policy":{"id":"a90b99c8-5218-453f-b82e-7632d8c9d9b4","type":"UnionRenderers"}},"id":"1ccff8ca-1c8e-4eb8-91d6-ecbbbd972784","type":"ColumnDataSource"},{"attributes":{},"id":"8c26f12b-14b4-4b02-abdc-e14a213561c7","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2a6465c2-66ea-45ea-9a3a-70555ca84eba","type":"BoxAnnotation"},{"attributes":{},"id":"96cb0050-2490-4b69-acde-736818da0e92","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"2bb3a62d-57cc-46d4-a71b-27ef5800796a","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"7b918392-91d2-4aaf-9a26-11b4a64eaee9","subtype":"Figure","type":"Plot"},"ticker":{"id":"e2136b21-6961-44b9-937d-f66dade63c7f","type":"BasicTicker"}},"id":"23739cef-e06c-4ba1-ad72-351a82622e56","type":"Grid"},{"attributes":{},"id":"1d48689d-875e-4085-88c7-44154cc6d727","type":"BasicTickFormatter"}],"root_ids":["7b918392-91d2-4aaf-9a26-11b4a64eaee9"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"573695dd-2957-4264-b99c-a010406c33da","roots":{"7b918392-91d2-4aaf-9a26-11b4a64eaee9":"417f5136-85fc-4890-8d64-dbec05a863c5"}}];
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