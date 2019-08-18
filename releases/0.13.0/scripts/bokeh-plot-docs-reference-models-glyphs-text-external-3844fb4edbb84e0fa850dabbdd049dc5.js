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
      };var element = document.getElementById("28284888-e2be-4421-b4df-a87882be15d7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '28284888-e2be-4421-b4df-a87882be15d7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a1155a92-efd3-446b-a795-b0e7d312fc76":{"roots":{"references":[{"attributes":{"formatter":{"id":"a9003d21-3b0b-440c-a2f5-ba4289c54a05","type":"BasicTickFormatter"},"plot":{"id":"016b5437-9c69-4688-beb7-9cc5bcde9cec","type":"Plot"},"ticker":{"id":"02e84e68-7c4c-4157-aec8-965011e8137c","type":"BasicTicker"}},"id":"7be63830-af82-4d3f-a640-95358b735e4d","type":"LinearAxis"},{"attributes":{},"id":"a9003d21-3b0b-440c-a2f5-ba4289c54a05","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"78e6fe75-b886-4b71-bb63-66a352988695","type":"BasicTickFormatter"},"plot":{"id":"016b5437-9c69-4688-beb7-9cc5bcde9cec","type":"Plot"},"ticker":{"id":"7b366ec0-9cc7-410a-aa45-b48f224d9201","type":"BasicTicker"}},"id":"dbaf6426-caa1-4f0a-baa6-8b267dc185f2","type":"LinearAxis"},{"attributes":{},"id":"02e84e68-7c4c-4157-aec8-965011e8137c","type":"BasicTicker"},{"attributes":{},"id":"17ee3fc2-bba0-4492-8e64-46a8f32ef224","type":"LinearScale"},{"attributes":{"below":[{"id":"7be63830-af82-4d3f-a640-95358b735e4d","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"dbaf6426-caa1-4f0a-baa6-8b267dc185f2","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"d2fed71e-2af2-452d-9134-d1dd52c6b86f","type":"GlyphRenderer"},{"id":"7be63830-af82-4d3f-a640-95358b735e4d","type":"LinearAxis"},{"id":"dbaf6426-caa1-4f0a-baa6-8b267dc185f2","type":"LinearAxis"},{"id":"69224a17-aad5-48ff-922f-2df594af9965","type":"Grid"},{"id":"e37d7600-d23b-4f5b-8986-97e9d8390f74","type":"Grid"}],"title":null,"toolbar":{"id":"b07e7d45-0c68-48d6-95dc-af6917d760d8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a1f1e7df-1fbf-4a86-8d86-8fa43e277709","type":"DataRange1d"},"x_scale":{"id":"17ee3fc2-bba0-4492-8e64-46a8f32ef224","type":"LinearScale"},"y_range":{"id":"f29d353c-0803-49bd-b501-f09aac36896f","type":"DataRange1d"},"y_scale":{"id":"e894b4aa-22ed-403e-b741-6f103dcac4d4","type":"LinearScale"}},"id":"016b5437-9c69-4688-beb7-9cc5bcde9cec","type":"Plot"},{"attributes":{"callback":null},"id":"f29d353c-0803-49bd-b501-f09aac36896f","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"b07e7d45-0c68-48d6-95dc-af6917d760d8","type":"Toolbar"},{"attributes":{"plot":{"id":"016b5437-9c69-4688-beb7-9cc5bcde9cec","type":"Plot"},"ticker":{"id":"02e84e68-7c4c-4157-aec8-965011e8137c","type":"BasicTicker"}},"id":"69224a17-aad5-48ff-922f-2df594af9965","type":"Grid"},{"attributes":{"source":{"id":"d917f546-d6f6-4bf7-8b37-e9c3ee5d193a","type":"ColumnDataSource"}},"id":"4899aeff-7135-48ce-995e-bfacedf301b2","type":"CDSView"},{"attributes":{"callback":null},"id":"a1f1e7df-1fbf-4a86-8d86-8fa43e277709","type":"DataRange1d"},{"attributes":{},"id":"78e6fe75-b886-4b71-bb63-66a352988695","type":"BasicTickFormatter"},{"attributes":{},"id":"e894b4aa-22ed-403e-b741-6f103dcac4d4","type":"LinearScale"},{"attributes":{"callback":null,"data":{"text":["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"],"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"42f224f0-dc20-4286-9290-343a2e866c23","type":"Selection"},"selection_policy":{"id":"9609fdaa-d5a0-45c3-8c93-e608dedf970b","type":"UnionRenderers"}},"id":"d917f546-d6f6-4bf7-8b37-e9c3ee5d193a","type":"ColumnDataSource"},{"attributes":{},"id":"7b366ec0-9cc7-410a-aa45-b48f224d9201","type":"BasicTicker"},{"attributes":{},"id":"9609fdaa-d5a0-45c3-8c93-e608dedf970b","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"d917f546-d6f6-4bf7-8b37-e9c3ee5d193a","type":"ColumnDataSource"},"glyph":{"id":"43016b00-14fa-47f7-a4b2-7f9533f4ea83","type":"Text"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4899aeff-7135-48ce-995e-bfacedf301b2","type":"CDSView"}},"id":"d2fed71e-2af2-452d-9134-d1dd52c6b86f","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"016b5437-9c69-4688-beb7-9cc5bcde9cec","type":"Plot"},"ticker":{"id":"7b366ec0-9cc7-410a-aa45-b48f224d9201","type":"BasicTicker"}},"id":"e37d7600-d23b-4f5b-8986-97e9d8390f74","type":"Grid"},{"attributes":{},"id":"42f224f0-dc20-4286-9290-343a2e866c23","type":"Selection"},{"attributes":{"angle":{"units":"rad","value":0.3},"text_color":{"value":"#96deb3"},"x":{"field":"x"},"y":{"field":"y"}},"id":"43016b00-14fa-47f7-a4b2-7f9533f4ea83","type":"Text"}],"root_ids":["016b5437-9c69-4688-beb7-9cc5bcde9cec"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"a1155a92-efd3-446b-a795-b0e7d312fc76","roots":{"016b5437-9c69-4688-beb7-9cc5bcde9cec":"28284888-e2be-4421-b4df-a87882be15d7"}}];
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