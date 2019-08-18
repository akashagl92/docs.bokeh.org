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
      };var element = document.getElementById("dba6715e-5be6-4dbe-96d5-827a6f72b7db");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dba6715e-5be6-4dbe-96d5-827a6f72b7db' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"782c2ac1-8874-47f2-a46e-f4d53f4dfc6e":{"roots":{"references":[{"attributes":{},"id":"57f2220c-5be6-45b6-a4f9-f3263b6e4411","type":"LinearScale"},{"attributes":{},"id":"9da3b698-535a-49a0-bce7-e5a73a5341f2","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7096d41b-150b-4f49-b6b5-a59c64b0930e","type":"Circle"},{"attributes":{"data_source":{"id":"a8677c4a-0ab5-4163-a2f0-13f27ceb7dd2","type":"ColumnDataSource"},"glyph":{"id":"7096d41b-150b-4f49-b6b5-a59c64b0930e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b0c4ac0d-020b-4078-9db4-250c9efc430c","type":"Circle"},"selection_glyph":null,"view":{"id":"09f5f091-d4e1-41cc-bdc3-6e97dc994306","type":"CDSView"}},"id":"b2e34b96-afe7-4d9c-9712-884c6e2b8a34","type":"GlyphRenderer"},{"attributes":{},"id":"255d9199-5cf9-47cb-8672-1efbdc72e2c0","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"135db1c7-02a2-4e79-8e13-ec8582f3c3ae","subtype":"Figure","type":"Plot"},"ticker":{"id":"255d9199-5cf9-47cb-8672-1efbdc72e2c0","type":"BasicTicker"}},"id":"d1df8935-1432-477b-b196-7224b3989e0c","type":"Grid"},{"attributes":{"overlay":{"id":"2da00176-6e51-4670-af6e-e604aa7504d0","type":"BoxAnnotation"}},"id":"6b98ccbc-a489-4b81-83b2-3e057afbbb2b","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"2bfa4789-dfce-4478-a739-3fa2cca18fac","type":"DataRange1d"},{"attributes":{},"id":"0663db22-7769-4dfa-908d-a64c54df64cd","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"c2201ed5-bda4-4069-9987-de4815a9f534","type":"BasicTickFormatter"},"plot":{"id":"135db1c7-02a2-4e79-8e13-ec8582f3c3ae","subtype":"Figure","type":"Plot"},"ticker":{"id":"255d9199-5cf9-47cb-8672-1efbdc72e2c0","type":"BasicTicker"}},"id":"a4cb488c-fd89-40fa-b00a-aaf2662e29b7","type":"LinearAxis"},{"attributes":{},"id":"16d9acd1-7a8e-4f47-bc6d-3f588d529b89","type":"ResetTool"},{"attributes":{},"id":"d2f588aa-9b57-4234-a86d-ccf12e2f698e","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"0663db22-7769-4dfa-908d-a64c54df64cd","type":"BasicTickFormatter"},"plot":{"id":"135db1c7-02a2-4e79-8e13-ec8582f3c3ae","subtype":"Figure","type":"Plot"},"ticker":{"id":"9da3b698-535a-49a0-bce7-e5a73a5341f2","type":"BasicTicker"}},"id":"76993f3f-081c-459a-bca6-2eeb18d7f795","type":"LinearAxis"},{"attributes":{},"id":"218533c1-5345-4dd4-a211-533198d22895","type":"PanTool"},{"attributes":{"plot":{"id":"135db1c7-02a2-4e79-8e13-ec8582f3c3ae","subtype":"Figure","type":"Plot"},"ticker":{"id":"9da3b698-535a-49a0-bce7-e5a73a5341f2","type":"BasicTicker"}},"id":"343e8d36-f562-423f-a677-421ca0d22b06","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2da00176-6e51-4670-af6e-e604aa7504d0","type":"BoxAnnotation"},{"attributes":{},"id":"e88cc556-bc11-421e-b44f-edfd8b4b353e","type":"LinearScale"},{"attributes":{},"id":"1b1719da-06dd-4636-95f6-db6e222f1a4e","type":"Selection"},{"attributes":{"plot":null,"text":"Mouse over the dots"},"id":"c945a109-fe48-4117-bd36-cf80a18a0e1b","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"b0c4ac0d-020b-4078-9db4-250c9efc430c","type":"Circle"},{"attributes":{},"id":"7c4bc97e-3abe-4bb4-97d8-ad14c11bff49","type":"HelpTool"},{"attributes":{"callback":null,"data":{"desc":["A","b","C","d","E"],"fonts":["&lt;i&gt;italics&lt;/i&gt;","&lt;pre&gt;pre&lt;/pre&gt;","&lt;b&gt;bold&lt;/b&gt;","&lt;small&gt;small&lt;/small&gt;","&lt;del&gt;del&lt;/del&gt;"],"imgs":["https://bokeh.pydata.org/static/snake.jpg","https://bokeh.pydata.org/static/snake2.png","https://bokeh.pydata.org/static/snake3D.png","https://bokeh.pydata.org/static/snake4_TheRevenge.png","https://bokeh.pydata.org/static/snakebite.jpg"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"1b1719da-06dd-4636-95f6-db6e222f1a4e","type":"Selection"},"selection_policy":{"id":"d2f588aa-9b57-4234-a86d-ccf12e2f698e","type":"UnionRenderers"}},"id":"a8677c4a-0ab5-4163-a2f0-13f27ceb7dd2","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"218533c1-5345-4dd4-a211-533198d22895","type":"PanTool"},{"id":"970405a0-be7b-484e-b4a2-542f727d6657","type":"WheelZoomTool"},{"id":"6b98ccbc-a489-4b81-83b2-3e057afbbb2b","type":"BoxZoomTool"},{"id":"9d11602a-326e-454a-a234-540f99322b3f","type":"SaveTool"},{"id":"16d9acd1-7a8e-4f47-bc6d-3f588d529b89","type":"ResetTool"},{"id":"7c4bc97e-3abe-4bb4-97d8-ad14c11bff49","type":"HelpTool"},{"id":"687587c2-d97b-40c3-939b-e369b626623c","type":"HoverTool"}]},"id":"12c3783c-3c55-4c6c-91ba-af0bda1b3084","type":"Toolbar"},{"attributes":{"source":{"id":"a8677c4a-0ab5-4163-a2f0-13f27ceb7dd2","type":"ColumnDataSource"}},"id":"09f5f091-d4e1-41cc-bdc3-6e97dc994306","type":"CDSView"},{"attributes":{"callback":null},"id":"794ef959-006c-4378-805f-dee95fb2fe2a","type":"DataRange1d"},{"attributes":{},"id":"c2201ed5-bda4-4069-9987-de4815a9f534","type":"BasicTickFormatter"},{"attributes":{},"id":"970405a0-be7b-484e-b4a2-542f727d6657","type":"WheelZoomTool"},{"attributes":{"callback":null,"renderers":"auto","tooltips":"\\n    &lt;div&gt;\\n        &lt;div&gt;\\n            &lt;img\\n                src=\\"@imgs\\" height=\\"42\\" alt=\\"@imgs\\" width=\\"42\\"\\n                style=\\"float: left; margin: 0px 15px 15px 0px;\\"\\n                border=\\"2\\"\\n            &gt;&lt;/img&gt;\\n        &lt;/div&gt;\\n        &lt;div&gt;\\n            &lt;span style=\\"font-size: 17px; font-weight: bold;\\"&gt;@desc&lt;/span&gt;\\n            &lt;span style=\\"font-size: 15px; color: #966;\\"&gt;[$index]&lt;/span&gt;\\n        &lt;/div&gt;\\n        &lt;div&gt;\\n            &lt;span&gt;@fonts{safe}&lt;/span&gt;\\n        &lt;/div&gt;\\n        &lt;div&gt;\\n            &lt;span style=\\"font-size: 15px;\\"&gt;Location&lt;/span&gt;\\n            &lt;span style=\\"font-size: 10px; color: #696;\\"&gt;($x, $y)&lt;/span&gt;\\n        &lt;/div&gt;\\n    &lt;/div&gt;\\n"},"id":"687587c2-d97b-40c3-939b-e369b626623c","type":"HoverTool"},{"attributes":{"below":[{"id":"76993f3f-081c-459a-bca6-2eeb18d7f795","type":"LinearAxis"}],"left":[{"id":"a4cb488c-fd89-40fa-b00a-aaf2662e29b7","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"76993f3f-081c-459a-bca6-2eeb18d7f795","type":"LinearAxis"},{"id":"343e8d36-f562-423f-a677-421ca0d22b06","type":"Grid"},{"id":"a4cb488c-fd89-40fa-b00a-aaf2662e29b7","type":"LinearAxis"},{"id":"d1df8935-1432-477b-b196-7224b3989e0c","type":"Grid"},{"id":"2da00176-6e51-4670-af6e-e604aa7504d0","type":"BoxAnnotation"},{"id":"b2e34b96-afe7-4d9c-9712-884c6e2b8a34","type":"GlyphRenderer"}],"title":{"id":"c945a109-fe48-4117-bd36-cf80a18a0e1b","type":"Title"},"toolbar":{"id":"12c3783c-3c55-4c6c-91ba-af0bda1b3084","type":"Toolbar"},"x_range":{"id":"794ef959-006c-4378-805f-dee95fb2fe2a","type":"DataRange1d"},"x_scale":{"id":"e88cc556-bc11-421e-b44f-edfd8b4b353e","type":"LinearScale"},"y_range":{"id":"2bfa4789-dfce-4478-a739-3fa2cca18fac","type":"DataRange1d"},"y_scale":{"id":"57f2220c-5be6-45b6-a4f9-f3263b6e4411","type":"LinearScale"}},"id":"135db1c7-02a2-4e79-8e13-ec8582f3c3ae","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9d11602a-326e-454a-a234-540f99322b3f","type":"SaveTool"}],"root_ids":["135db1c7-02a2-4e79-8e13-ec8582f3c3ae"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"782c2ac1-8874-47f2-a46e-f4d53f4dfc6e","roots":{"135db1c7-02a2-4e79-8e13-ec8582f3c3ae":"dba6715e-5be6-4dbe-96d5-827a6f72b7db"}}];
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