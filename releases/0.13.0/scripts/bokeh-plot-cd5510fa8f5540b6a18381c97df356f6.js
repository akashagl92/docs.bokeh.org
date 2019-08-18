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
      };var element = document.getElementById("7c3265f1-78f5-4626-ba7a-17969900cd81");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7c3265f1-78f5-4626-ba7a-17969900cd81' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c62d9c1e-6bca-4a49-b88c-cf52dd1ba7be":{"roots":{"references":[{"attributes":{"plot":{"id":"e8c523ba-3930-4cc0-b1d4-5a347ea1efa0","subtype":"Figure","type":"Plot"},"ticker":{"id":"52d28bd6-936b-4be6-a130-b2f9e9652ee7","type":"BasicTicker"}},"id":"72d87349-d7b4-4be7-895e-58336377a888","type":"Grid"},{"attributes":{},"id":"795a425b-b78a-4840-a6a2-2ebeeb51acbb","type":"BasicTicker"},{"attributes":{"data_source":{"id":"d5beaf26-ed3f-42d0-9aa2-8791ad9d2ce4","type":"ColumnDataSource"},"glyph":{"id":"71e71a12-019b-4267-b62a-5ea2c8591ca1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f8c08b9c-bc6e-4c80-9325-f3c8b7e53031","type":"Circle"},"selection_glyph":null,"view":{"id":"d313691a-afc7-420b-b487-caf6d7e8a3ce","type":"CDSView"}},"id":"0281ad39-d781-4b8f-b6e9-e465a150bd27","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"d4976dc0-2967-494a-9aaa-fb23389d28c9","type":"BasicTickFormatter"},"plot":{"id":"e8c523ba-3930-4cc0-b1d4-5a347ea1efa0","subtype":"Figure","type":"Plot"},"ticker":{"id":"795a425b-b78a-4840-a6a2-2ebeeb51acbb","type":"BasicTicker"}},"id":"a3365a83-91d1-43ad-baee-bc29a2100031","type":"LinearAxis"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"71e71a12-019b-4267-b62a-5ea2c8591ca1","type":"Circle"},{"attributes":{},"id":"3463c1cf-0d4d-44b3-b7f6-21024c19a146","type":"BasicTickFormatter"},{"attributes":{},"id":"a87ba300-e7c7-4e26-8ff4-b4a2132fac6a","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"f8c08b9c-bc6e-4c80-9325-f3c8b7e53031","type":"Circle"},{"attributes":{},"id":"b2d59495-d8c8-477f-97e1-af139e021b2d","type":"LinearScale"},{"attributes":{"formatter":{"id":"3463c1cf-0d4d-44b3-b7f6-21024c19a146","type":"BasicTickFormatter"},"plot":{"id":"e8c523ba-3930-4cc0-b1d4-5a347ea1efa0","subtype":"Figure","type":"Plot"},"ticker":{"id":"52d28bd6-936b-4be6-a130-b2f9e9652ee7","type":"BasicTicker"}},"id":"e4f40064-c7b2-4740-8377-0d6cd7ee6b1b","type":"LinearAxis"},{"attributes":{"callback":null},"id":"0e305b4b-c6c4-4247-af82-ab7524a9d366","type":"DataRange1d"},{"attributes":{},"id":"d4976dc0-2967-494a-9aaa-fb23389d28c9","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"c58177d9-051a-4f66-afc0-289b5668e660","type":"DataRange1d"},{"attributes":{"callback":{"id":"5b00d8e4-5fa8-446a-b047-946b7c4033f1","type":"OpenURL"}},"id":"4c3a62d2-a422-4459-9adc-a20bf9caec91","type":"TapTool"},{"attributes":{},"id":"52d28bd6-936b-4be6-a130-b2f9e9652ee7","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Click the Dots"},"id":"3d6d64ce-c329-4b0d-8107-5cdca622bca5","type":"Title"},{"attributes":{"callback":null,"data":{"color":["navy","orange","olive","firebrick","gold"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"a87ba300-e7c7-4e26-8ff4-b4a2132fac6a","type":"Selection"},"selection_policy":{"id":"be219c7c-5b3f-4fb4-b081-578cf3aeddfc","type":"UnionRenderers"}},"id":"d5beaf26-ed3f-42d0-9aa2-8791ad9d2ce4","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"e4f40064-c7b2-4740-8377-0d6cd7ee6b1b","type":"LinearAxis"}],"left":[{"id":"a3365a83-91d1-43ad-baee-bc29a2100031","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"e4f40064-c7b2-4740-8377-0d6cd7ee6b1b","type":"LinearAxis"},{"id":"72d87349-d7b4-4be7-895e-58336377a888","type":"Grid"},{"id":"a3365a83-91d1-43ad-baee-bc29a2100031","type":"LinearAxis"},{"id":"4dc91e69-7ba8-45e4-9595-c61235f7e871","type":"Grid"},{"id":"0281ad39-d781-4b8f-b6e9-e465a150bd27","type":"GlyphRenderer"}],"title":{"id":"3d6d64ce-c329-4b0d-8107-5cdca622bca5","type":"Title"},"toolbar":{"id":"0372a3b6-c7b0-4b9d-aae9-29c03d1ef015","type":"Toolbar"},"x_range":{"id":"c58177d9-051a-4f66-afc0-289b5668e660","type":"DataRange1d"},"x_scale":{"id":"7d4b0969-4e09-40e9-b1bd-b0f04dd895ea","type":"LinearScale"},"y_range":{"id":"0e305b4b-c6c4-4247-af82-ab7524a9d366","type":"DataRange1d"},"y_scale":{"id":"b2d59495-d8c8-477f-97e1-af139e021b2d","type":"LinearScale"}},"id":"e8c523ba-3930-4cc0-b1d4-5a347ea1efa0","subtype":"Figure","type":"Plot"},{"attributes":{"url":"http://www.colors.commutercreative.com/@color/"},"id":"5b00d8e4-5fa8-446a-b047-946b7c4033f1","type":"OpenURL"},{"attributes":{},"id":"7d4b0969-4e09-40e9-b1bd-b0f04dd895ea","type":"LinearScale"},{"attributes":{},"id":"be219c7c-5b3f-4fb4-b081-578cf3aeddfc","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4c3a62d2-a422-4459-9adc-a20bf9caec91","type":"TapTool"}]},"id":"0372a3b6-c7b0-4b9d-aae9-29c03d1ef015","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"e8c523ba-3930-4cc0-b1d4-5a347ea1efa0","subtype":"Figure","type":"Plot"},"ticker":{"id":"795a425b-b78a-4840-a6a2-2ebeeb51acbb","type":"BasicTicker"}},"id":"4dc91e69-7ba8-45e4-9595-c61235f7e871","type":"Grid"},{"attributes":{"source":{"id":"d5beaf26-ed3f-42d0-9aa2-8791ad9d2ce4","type":"ColumnDataSource"}},"id":"d313691a-afc7-420b-b487-caf6d7e8a3ce","type":"CDSView"}],"root_ids":["e8c523ba-3930-4cc0-b1d4-5a347ea1efa0"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"c62d9c1e-6bca-4a49-b88c-cf52dd1ba7be","roots":{"e8c523ba-3930-4cc0-b1d4-5a347ea1efa0":"7c3265f1-78f5-4626-ba7a-17969900cd81"}}];
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