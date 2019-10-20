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
      };var element = document.getElementById("c304560e-4a17-41e4-b813-50dd580481a0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c304560e-4a17-41e4-b813-50dd580481a0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"35bc050f-42b8-458e-a686-39bdd2d5dc91":{"roots":{"references":[{"attributes":{"callback":null},"id":"82a65ffc-d182-4864-8b43-c0561da5fe69","type":"DataRange1d"},{"attributes":{"data_source":{"id":"4a88feb7-8b1f-4cc0-945d-8f10c3c0bc57","type":"ColumnDataSource"},"glyph":{"id":"52764005-5a3f-4ed7-abcc-57433b6aa8d4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68130696-021d-4e4f-a278-459a8affd21c","type":"Circle"},"selection_glyph":null,"view":{"id":"83878e27-d89b-42c1-baae-5f1685b2cbae","type":"CDSView"}},"id":"a026832d-e912-4e9b-b734-7fa0956fbae7","type":"GlyphRenderer"},{"attributes":{},"id":"ff424ec2-3220-4f37-b567-308035e7746e","type":"LinearScale"},{"attributes":{},"id":"74b632d7-4780-4c75-883d-b3de9ae54954","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"68130696-021d-4e4f-a278-459a8affd21c","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"9c4db191-69da-44fa-bf28-3f2a04e6c732","subtype":"Figure","type":"Plot"},"ticker":{"id":"dfd19895-6e82-4889-9fec-6a70d79b12a4","type":"BasicTicker"}},"id":"6efdc459-fca5-465a-b595-d6a0b3e73ca9","type":"Grid"},{"attributes":{},"id":"01e3a560-7b34-47fe-b308-2f7bc97686f6","type":"BasicTicker"},{"attributes":{"formatter":{"id":"c5abdf51-422a-4bc5-b45e-2d9f26408475","type":"BasicTickFormatter"},"plot":{"id":"9c4db191-69da-44fa-bf28-3f2a04e6c732","subtype":"Figure","type":"Plot"},"ticker":{"id":"dfd19895-6e82-4889-9fec-6a70d79b12a4","type":"BasicTicker"}},"id":"27591486-dd1b-49c3-bf18-d71ebfa25a04","type":"LinearAxis"},{"attributes":{"below":[{"id":"455200ce-d686-4234-b970-c88eb0d75029","type":"LinearAxis"}],"left":[{"id":"27591486-dd1b-49c3-bf18-d71ebfa25a04","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"455200ce-d686-4234-b970-c88eb0d75029","type":"LinearAxis"},{"id":"49ad24cb-69aa-4a9a-a17c-94f681a9ccc1","type":"Grid"},{"id":"27591486-dd1b-49c3-bf18-d71ebfa25a04","type":"LinearAxis"},{"id":"6efdc459-fca5-465a-b595-d6a0b3e73ca9","type":"Grid"},{"id":"128e6ea4-7f49-4faf-b976-29e9305928cd","type":"BoxAnnotation"},{"id":"a026832d-e912-4e9b-b734-7fa0956fbae7","type":"GlyphRenderer"}],"title":{"id":"ee65a0a4-8ce5-41f4-b244-6fcf8fd0c86b","type":"Title"},"toolbar":{"id":"c1220d65-8ff4-4386-aa2f-5bc40a3f8cd7","type":"Toolbar"},"x_range":{"id":"cc222297-089a-47fd-9f75-224338e8d08c","type":"DataRange1d"},"x_scale":{"id":"22f6424f-d8dd-41bb-962e-1de3d26a3859","type":"LinearScale"},"y_range":{"id":"82a65ffc-d182-4864-8b43-c0561da5fe69","type":"DataRange1d"},"y_scale":{"id":"ff424ec2-3220-4f37-b567-308035e7746e","type":"LinearScale"}},"id":"9c4db191-69da-44fa-bf28-3f2a04e6c732","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"67d16ec3-5b16-49b0-8163-1deb0c74f519","type":"BasicTickFormatter"},"plot":{"id":"9c4db191-69da-44fa-bf28-3f2a04e6c732","subtype":"Figure","type":"Plot"},"ticker":{"id":"23d6578f-cc98-403d-836a-d6d2c58b9f9c","type":"FixedTicker"}},"id":"455200ce-d686-4234-b970-c88eb0d75029","type":"LinearAxis"},{"attributes":{"plot":{"id":"9c4db191-69da-44fa-bf28-3f2a04e6c732","subtype":"Figure","type":"Plot"},"ticker":{"id":"01e3a560-7b34-47fe-b308-2f7bc97686f6","type":"BasicTicker"}},"id":"49ad24cb-69aa-4a9a-a17c-94f681a9ccc1","type":"Grid"},{"attributes":{},"id":"60347d6a-2968-4bda-99ce-3b4ee753f410","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"ee65a0a4-8ce5-41f4-b244-6fcf8fd0c86b","type":"Title"},{"attributes":{"source":{"id":"4a88feb7-8b1f-4cc0-945d-8f10c3c0bc57","type":"ColumnDataSource"}},"id":"83878e27-d89b-42c1-baae-5f1685b2cbae","type":"CDSView"},{"attributes":{"overlay":{"id":"128e6ea4-7f49-4faf-b976-29e9305928cd","type":"BoxAnnotation"}},"id":"a7d54db5-135c-4776-a0d6-7809a8d82c12","type":"BoxZoomTool"},{"attributes":{},"id":"22f6424f-d8dd-41bb-962e-1de3d26a3859","type":"LinearScale"},{"attributes":{},"id":"94f762ad-cf7d-423f-b99f-d2eee39e9b07","type":"ResetTool"},{"attributes":{},"id":"d498b4e3-228e-4eaa-b2ea-7295f253e8df","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"128e6ea4-7f49-4faf-b976-29e9305928cd","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"cc222297-089a-47fd-9f75-224338e8d08c","type":"DataRange1d"},{"attributes":{"ticks":[2,3.5,4]},"id":"23d6578f-cc98-403d-836a-d6d2c58b9f9c","type":"FixedTicker"},{"attributes":{},"id":"dfd19895-6e82-4889-9fec-6a70d79b12a4","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"4a88feb7-8b1f-4cc0-945d-8f10c3c0bc57","type":"ColumnDataSource"},{"attributes":{},"id":"c5abdf51-422a-4bc5-b45e-2d9f26408475","type":"BasicTickFormatter"},{"attributes":{},"id":"67d16ec3-5b16-49b0-8163-1deb0c74f519","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"74b632d7-4780-4c75-883d-b3de9ae54954","type":"PanTool"},{"id":"d498b4e3-228e-4eaa-b2ea-7295f253e8df","type":"WheelZoomTool"},{"id":"a7d54db5-135c-4776-a0d6-7809a8d82c12","type":"BoxZoomTool"},{"id":"f5ba4c0f-aa79-4c74-bf73-beea6db51ab4","type":"SaveTool"},{"id":"94f762ad-cf7d-423f-b99f-d2eee39e9b07","type":"ResetTool"},{"id":"60347d6a-2968-4bda-99ce-3b4ee753f410","type":"HelpTool"}]},"id":"c1220d65-8ff4-4386-aa2f-5bc40a3f8cd7","type":"Toolbar"},{"attributes":{},"id":"f5ba4c0f-aa79-4c74-bf73-beea6db51ab4","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"52764005-5a3f-4ed7-abcc-57433b6aa8d4","type":"Circle"}],"root_ids":["9c4db191-69da-44fa-bf28-3f2a04e6c732"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"35bc050f-42b8-458e-a686-39bdd2d5dc91","elementid":"c304560e-4a17-41e4-b813-50dd580481a0","modelid":"9c4db191-69da-44fa-bf28-3f2a04e6c732"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
