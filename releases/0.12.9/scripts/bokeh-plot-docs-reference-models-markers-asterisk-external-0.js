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
      };var element = document.getElementById("1a0301a4-0adc-427a-abda-2ee2ca8dc46e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1a0301a4-0adc-427a-abda-2ee2ca8dc46e' but no matching script tag was found. ")
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
                    var docs_json = {"ba745a54-51bb-473b-ad02-3baf7a9fabfe":{"roots":{"references":[{"attributes":{},"id":"7e6bf0b1-1315-4a14-91af-f933d76bf32e","type":"BasicTicker"},{"attributes":{},"id":"b50ab850-bf7e-4846-b926-47cee889d15f","type":"BasicTicker"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#f0027f"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1eb1e6da-73dd-4223-90eb-03f4d230b58b","type":"Asterisk"},{"attributes":{},"id":"2f98a289-582b-4b2e-9b55-b6112b9b822d","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"8faafbe7-7637-4bf6-83b3-b90837b626c3","type":"Plot"},"ticker":{"id":"b50ab850-bf7e-4846-b926-47cee889d15f","type":"BasicTicker"}},"id":"27534f23-f101-475e-a19a-496aed493878","type":"Grid"},{"attributes":{"formatter":{"id":"244a9a1e-e698-4744-ba06-3beb22efb9e3","type":"BasicTickFormatter"},"plot":{"id":"8faafbe7-7637-4bf6-83b3-b90837b626c3","type":"Plot"},"ticker":{"id":"7e6bf0b1-1315-4a14-91af-f933d76bf32e","type":"BasicTicker"}},"id":"3ef6aadc-2296-461d-a0e0-ffe488b9c152","type":"LinearAxis"},{"attributes":{},"id":"6c31e93b-5a11-4404-8f94-fb09e33b242c","type":"LinearScale"},{"attributes":{},"id":"e3037e82-b220-4524-a2d7-cd90ad78e475","type":"LinearScale"},{"attributes":{},"id":"244a9a1e-e698-4744-ba06-3beb22efb9e3","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"66a0c5e8-9325-4e0d-89f2-4e65278188a2","type":"ColumnDataSource"}},"id":"27e494f3-c37c-4dbe-ad94-d233ec12bdb1","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"8faafbe7-7637-4bf6-83b3-b90837b626c3","type":"Plot"},"ticker":{"id":"7e6bf0b1-1315-4a14-91af-f933d76bf32e","type":"BasicTicker"}},"id":"19fff490-dcf0-468e-b2f8-72ddf36f5e8f","type":"Grid"},{"attributes":{"formatter":{"id":"2f98a289-582b-4b2e-9b55-b6112b9b822d","type":"BasicTickFormatter"},"plot":{"id":"8faafbe7-7637-4bf6-83b3-b90837b626c3","type":"Plot"},"ticker":{"id":"b50ab850-bf7e-4846-b926-47cee889d15f","type":"BasicTicker"}},"id":"9dc5c69c-884c-4f62-b98b-bf9c9ce4a239","type":"LinearAxis"},{"attributes":{"below":[{"id":"9dc5c69c-884c-4f62-b98b-bf9c9ce4a239","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"3ef6aadc-2296-461d-a0e0-ffe488b9c152","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"0b087ded-22e0-46ad-9d96-9a4f60344826","type":"GlyphRenderer"},{"id":"9dc5c69c-884c-4f62-b98b-bf9c9ce4a239","type":"LinearAxis"},{"id":"3ef6aadc-2296-461d-a0e0-ffe488b9c152","type":"LinearAxis"},{"id":"27534f23-f101-475e-a19a-496aed493878","type":"Grid"},{"id":"19fff490-dcf0-468e-b2f8-72ddf36f5e8f","type":"Grid"}],"title":null,"toolbar":{"id":"424531ef-3f42-4fc2-98b5-46dc4f2f1130","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6f6b7668-59dd-4b08-badd-58cfe9053014","type":"DataRange1d"},"x_scale":{"id":"e3037e82-b220-4524-a2d7-cd90ad78e475","type":"LinearScale"},"y_range":{"id":"7c24f341-06bf-4302-8e9b-8823285a3204","type":"DataRange1d"},"y_scale":{"id":"6c31e93b-5a11-4404-8f94-fb09e33b242c","type":"LinearScale"}},"id":"8faafbe7-7637-4bf6-83b3-b90837b626c3","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"66a0c5e8-9325-4e0d-89f2-4e65278188a2","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"424531ef-3f42-4fc2-98b5-46dc4f2f1130","type":"Toolbar"},{"attributes":{"callback":null},"id":"6f6b7668-59dd-4b08-badd-58cfe9053014","type":"DataRange1d"},{"attributes":{"callback":null},"id":"7c24f341-06bf-4302-8e9b-8823285a3204","type":"DataRange1d"},{"attributes":{"data_source":{"id":"66a0c5e8-9325-4e0d-89f2-4e65278188a2","type":"ColumnDataSource"},"glyph":{"id":"1eb1e6da-73dd-4223-90eb-03f4d230b58b","type":"Asterisk"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"27e494f3-c37c-4dbe-ad94-d233ec12bdb1","type":"CDSView"}},"id":"0b087ded-22e0-46ad-9d96-9a4f60344826","type":"GlyphRenderer"}],"root_ids":["8faafbe7-7637-4bf6-83b3-b90837b626c3"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"ba745a54-51bb-473b-ad02-3baf7a9fabfe","elementid":"1a0301a4-0adc-427a-abda-2ee2ca8dc46e","modelid":"8faafbe7-7637-4bf6-83b3-b90837b626c3"}];
                
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
