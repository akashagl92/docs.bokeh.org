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
      };var element = document.getElementById("6eb9b208-4004-4789-bdf0-b145e5e69c7c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6eb9b208-4004-4789-bdf0-b145e5e69c7c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c5a9090e-ec14-4978-a382-f227a651ed56":{"roots":{"references":[{"attributes":{"formatter":{"id":"7c12a6cb-0072-466b-83d7-1404be8b33fe","type":"BasicTickFormatter"},"plot":{"id":"4ac3901a-3361-411a-ad74-6ffeb95ee398","subtype":"Figure","type":"Plot"},"ticker":{"id":"a7e00cba-8103-4340-9977-8304635f3f87","type":"BasicTicker"}},"id":"95d96f33-8c2c-47c2-bc6a-a37a5400eb65","type":"LinearAxis"},{"attributes":{"data_source":{"id":"e8707e4b-855d-4a7c-9063-582db736a636","type":"ColumnDataSource"},"glyph":{"id":"9edcf532-69eb-4846-b850-14ae183afe87","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9edcf532-69eb-4846-b850-14ae183afe87","type":"Rect"},"selection_glyph":{"id":"9edcf532-69eb-4846-b850-14ae183afe87","type":"Rect"},"view":{"id":"8f32847c-4406-4740-854c-a0d2586646e5","type":"CDSView"}},"id":"ecb7eb8c-d7de-43d2-a9b9-beba127cbdbb","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"85f1718c-8390-41b8-8477-34e513bbbf62","type":"BoxSelectTool"}]},"id":"e52c3ccc-5d7a-4858-916d-9813b21b4b58","type":"Toolbar"},{"attributes":{"source":{"id":"e8707e4b-855d-4a7c-9063-582db736a636","type":"ColumnDataSource"}},"id":"8f32847c-4406-4740-854c-a0d2586646e5","type":"CDSView"},{"attributes":{"callback":{"id":"d773c532-9d32-46b7-9be6-ff55f9a67298","type":"CustomJS"},"overlay":{"id":"3f8f0f3e-60a6-4701-b4a6-2ec6f4ce72c4","type":"BoxAnnotation"}},"id":"85f1718c-8390-41b8-8477-34e513bbbf62","type":"BoxSelectTool"},{"attributes":{"below":[{"id":"11d45dad-1b08-43b2-b03b-9a7365263d60","type":"LinearAxis"}],"left":[{"id":"95d96f33-8c2c-47c2-bc6a-a37a5400eb65","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11d45dad-1b08-43b2-b03b-9a7365263d60","type":"LinearAxis"},{"id":"65ea2c29-1cbb-4f19-b72b-69f2605682af","type":"Grid"},{"id":"95d96f33-8c2c-47c2-bc6a-a37a5400eb65","type":"LinearAxis"},{"id":"da1e460d-8baf-4c18-a7f8-4c1f4cdbb66a","type":"Grid"},{"id":"3f8f0f3e-60a6-4701-b4a6-2ec6f4ce72c4","type":"BoxAnnotation"},{"id":"ecb7eb8c-d7de-43d2-a9b9-beba127cbdbb","type":"GlyphRenderer"}],"title":{"id":"f68ad6eb-2951-4bee-9320-329aee64ee6d","type":"Title"},"toolbar":{"id":"e52c3ccc-5d7a-4858-916d-9813b21b4b58","type":"Toolbar"},"x_range":{"id":"98270b27-ec75-4df2-83b2-4e66d748acda","type":"Range1d"},"x_scale":{"id":"382f9298-9ca5-4444-b95b-c95da257d8ae","type":"LinearScale"},"y_range":{"id":"b5b24988-3f00-403d-b862-0b4376599abc","type":"Range1d"},"y_scale":{"id":"844ee61f-3542-4932-981c-cb60a5838f6a","type":"LinearScale"}},"id":"4ac3901a-3361-411a-ad74-6ffeb95ee398","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e25b85bf-1eed-4107-82cd-51359cedccaf","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3f8f0f3e-60a6-4701-b4a6-2ec6f4ce72c4","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"98270b27-ec75-4df2-83b2-4e66d748acda","type":"Range1d"},{"attributes":{},"id":"37384c06-3568-4ede-86b0-228a6573b3a2","type":"Selection"},{"attributes":{},"id":"c6e58cce-9d86-459e-afd9-a1eca4081159","type":"BasicTicker"},{"attributes":{},"id":"7c12a6cb-0072-466b-83d7-1404be8b33fe","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"e25b85bf-1eed-4107-82cd-51359cedccaf","type":"BasicTickFormatter"},"plot":{"id":"4ac3901a-3361-411a-ad74-6ffeb95ee398","subtype":"Figure","type":"Plot"},"ticker":{"id":"c6e58cce-9d86-459e-afd9-a1eca4081159","type":"BasicTicker"}},"id":"11d45dad-1b08-43b2-b03b-9a7365263d60","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"4ac3901a-3361-411a-ad74-6ffeb95ee398","subtype":"Figure","type":"Plot"},"ticker":{"id":"a7e00cba-8103-4340-9977-8304635f3f87","type":"BasicTicker"}},"id":"da1e460d-8baf-4c18-a7f8-4c1f4cdbb66a","type":"Grid"},{"attributes":{},"id":"382f9298-9ca5-4444-b95b-c95da257d8ae","type":"LinearScale"},{"attributes":{},"id":"a7e00cba-8103-4340-9977-8304635f3f87","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"height":[],"width":[],"x":[],"y":[]},"selected":{"id":"37384c06-3568-4ede-86b0-228a6573b3a2","type":"Selection"},"selection_policy":{"id":"f3560ae2-61a8-4e0c-80ff-ae24eb317b7f","type":"UnionRenderers"}},"id":"e8707e4b-855d-4a7c-9063-582db736a636","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"b5b24988-3f00-403d-b862-0b4376599abc","type":"Range1d"},{"attributes":{"plot":null,"text":"Select Below"},"id":"f68ad6eb-2951-4bee-9320-329aee64ee6d","type":"Title"},{"attributes":{"args":{"source":{"id":"e8707e4b-855d-4a7c-9063-582db736a636","type":"ColumnDataSource"}},"code":"\\n        // get data source from Callback args\\n        var data = source.data;\\n\\n        /// get BoxSelectTool dimensions from cb_data parameter of Callback\\n        var geometry = cb_data[&#x27;geometry&#x27;];\\n\\n        /// calculate Rect attributes\\n        var width = geometry[&#x27;x1&#x27;] - geometry[&#x27;x0&#x27;];\\n        var height = geometry[&#x27;y1&#x27;] - geometry[&#x27;y0&#x27;];\\n        var x = geometry[&#x27;x0&#x27;] + width/2;\\n        var y = geometry[&#x27;y0&#x27;] + height/2;\\n\\n        /// update data source with new Rect attributes\\n        data[&#x27;x&#x27;].push(x);\\n        data[&#x27;y&#x27;].push(y);\\n        data[&#x27;width&#x27;].push(width);\\n        data[&#x27;height&#x27;].push(height);\\n\\n        // emit update of data source\\n        source.change.emit();\\n    "},"id":"d773c532-9d32-46b7-9be6-ff55f9a67298","type":"CustomJS"},{"attributes":{},"id":"f3560ae2-61a8-4e0c-80ff-ae24eb317b7f","type":"UnionRenderers"},{"attributes":{"plot":{"id":"4ac3901a-3361-411a-ad74-6ffeb95ee398","subtype":"Figure","type":"Plot"},"ticker":{"id":"c6e58cce-9d86-459e-afd9-a1eca4081159","type":"BasicTicker"}},"id":"65ea2c29-1cbb-4f19-b72b-69f2605682af","type":"Grid"},{"attributes":{},"id":"844ee61f-3542-4932-981c-cb60a5838f6a","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.3},"fill_color":{"value":"#009933"},"height":{"field":"height","units":"data"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9edcf532-69eb-4846-b850-14ae183afe87","type":"Rect"}],"root_ids":["4ac3901a-3361-411a-ad74-6ffeb95ee398"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"c5a9090e-ec14-4978-a382-f227a651ed56","roots":{"4ac3901a-3361-411a-ad74-6ffeb95ee398":"6eb9b208-4004-4789-bdf0-b145e5e69c7c"}}];
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