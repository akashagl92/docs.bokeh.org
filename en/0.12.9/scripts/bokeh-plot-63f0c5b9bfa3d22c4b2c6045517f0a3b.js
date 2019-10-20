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
      };var element = document.getElementById("47f4d915-94f6-4b8b-ac1f-b2ccdfdf9693");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '47f4d915-94f6-4b8b-ac1f-b2ccdfdf9693' but no matching script tag was found. ")
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
                    var docs_json = {"c499df5d-167e-4cd5-ab9a-50b351c5f098":{"roots":{"references":[{"attributes":{"formatter":{"id":"e6f90578-d25e-4000-83e0-a3d0e3260245","type":"BasicTickFormatter"},"plot":{"id":"61b17f9d-a3a5-4819-beb0-5f11514c5904","subtype":"Figure","type":"Plot"},"ticker":{"id":"8b2ceea9-7c5a-49ec-9f92-993161d8fb3c","type":"BasicTicker"}},"id":"70295e5c-2d82-4bb4-94ba-168269c3bc62","type":"LinearAxis"},{"attributes":{"data_source":{"id":"681ef7ac-b77a-486e-a97c-5f09a1013f8b","type":"ColumnDataSource"},"glyph":{"id":"9170c398-4788-4c46-94ba-dfe3c9ea0e1c","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9170c398-4788-4c46-94ba-dfe3c9ea0e1c","type":"Rect"},"selection_glyph":{"id":"9170c398-4788-4c46-94ba-dfe3c9ea0e1c","type":"Rect"},"view":{"id":"ebb7e942-ef0d-4fd1-9867-ba8a7157794a","type":"CDSView"}},"id":"de1b1759-14c3-4bcd-a7fd-f059d6c5c3c7","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y","width","height"],"data":{"height":[],"width":[],"x":[],"y":[]}},"id":"681ef7ac-b77a-486e-a97c-5f09a1013f8b","type":"ColumnDataSource"},{"attributes":{"callback":{"id":"d135bcc0-82cc-454f-b717-0509ce91d4fc","type":"CustomJS"},"overlay":{"id":"54947336-5346-4026-9df2-63f26c98b121","type":"BoxAnnotation"}},"id":"5259e0ab-0f41-473e-9ea0-24521d4443e8","type":"BoxSelectTool"},{"attributes":{"below":[{"id":"70295e5c-2d82-4bb4-94ba-168269c3bc62","type":"LinearAxis"}],"left":[{"id":"8ff0afe9-667a-4993-8578-fd92760554f4","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"70295e5c-2d82-4bb4-94ba-168269c3bc62","type":"LinearAxis"},{"id":"9d91bd86-9efa-44d9-bf67-6fe6897a9072","type":"Grid"},{"id":"8ff0afe9-667a-4993-8578-fd92760554f4","type":"LinearAxis"},{"id":"fd54132f-c980-40ae-aab6-5134e30bc1cb","type":"Grid"},{"id":"54947336-5346-4026-9df2-63f26c98b121","type":"BoxAnnotation"},{"id":"de1b1759-14c3-4bcd-a7fd-f059d6c5c3c7","type":"GlyphRenderer"}],"title":{"id":"21973109-1e89-4e1a-bc8c-e9b9e568171a","type":"Title"},"toolbar":{"id":"80e05103-3482-4e58-a01e-6fbf566c9930","type":"Toolbar"},"x_range":{"id":"5dddf19d-f117-4cbf-850c-a489a52d2a9a","type":"Range1d"},"x_scale":{"id":"2adb7050-4db7-4274-9837-7c5de76ed385","type":"LinearScale"},"y_range":{"id":"13bd1ce1-1353-4f7c-a3fa-7bea345a2b12","type":"Range1d"},"y_scale":{"id":"530e6a87-4ece-4b54-acc6-e99c3015fc2c","type":"LinearScale"}},"id":"61b17f9d-a3a5-4819-beb0-5f11514c5904","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Select Below"},"id":"21973109-1e89-4e1a-bc8c-e9b9e568171a","type":"Title"},{"attributes":{"args":{"source":{"id":"681ef7ac-b77a-486e-a97c-5f09a1013f8b","type":"ColumnDataSource"}},"code":"\n        // get data source from Callback args\n        var data = source.data;\n\n        /// get BoxSelectTool dimensions from cb_data parameter of Callback\n        var geometry = cb_data['geometry'];\n\n        /// calculate Rect attributes\n        var width = geometry['x1'] - geometry['x0'];\n        var height = geometry['y1'] - geometry['y0'];\n        var x = geometry['x0'] + width/2;\n        var y = geometry['y0'] + height/2;\n\n        /// update data source with new Rect attributes\n        data['x'].push(x);\n        data['y'].push(y);\n        data['width'].push(width);\n        data['height'].push(height);\n\n        // emit update of data source\n        source.change.emit();\n    "},"id":"d135bcc0-82cc-454f-b717-0509ce91d4fc","type":"CustomJS"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"54947336-5346-4026-9df2-63f26c98b121","type":"BoxAnnotation"},{"attributes":{},"id":"cf853290-076e-48eb-b960-2e6a6f5fae3d","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"5dddf19d-f117-4cbf-850c-a489a52d2a9a","type":"Range1d"},{"attributes":{"plot":{"id":"61b17f9d-a3a5-4819-beb0-5f11514c5904","subtype":"Figure","type":"Plot"},"ticker":{"id":"8b2ceea9-7c5a-49ec-9f92-993161d8fb3c","type":"BasicTicker"}},"id":"9d91bd86-9efa-44d9-bf67-6fe6897a9072","type":"Grid"},{"attributes":{"formatter":{"id":"cf853290-076e-48eb-b960-2e6a6f5fae3d","type":"BasicTickFormatter"},"plot":{"id":"61b17f9d-a3a5-4819-beb0-5f11514c5904","subtype":"Figure","type":"Plot"},"ticker":{"id":"d54eae51-d5ee-4a40-8596-c1fdedb9ec8f","type":"BasicTicker"}},"id":"8ff0afe9-667a-4993-8578-fd92760554f4","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.3},"fill_color":{"value":"#009933"},"height":{"field":"height","units":"data"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9170c398-4788-4c46-94ba-dfe3c9ea0e1c","type":"Rect"},{"attributes":{},"id":"d54eae51-d5ee-4a40-8596-c1fdedb9ec8f","type":"BasicTicker"},{"attributes":{},"id":"e6f90578-d25e-4000-83e0-a3d0e3260245","type":"BasicTickFormatter"},{"attributes":{},"id":"8b2ceea9-7c5a-49ec-9f92-993161d8fb3c","type":"BasicTicker"},{"attributes":{},"id":"530e6a87-4ece-4b54-acc6-e99c3015fc2c","type":"LinearScale"},{"attributes":{},"id":"2adb7050-4db7-4274-9837-7c5de76ed385","type":"LinearScale"},{"attributes":{"callback":null},"id":"13bd1ce1-1353-4f7c-a3fa-7bea345a2b12","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"61b17f9d-a3a5-4819-beb0-5f11514c5904","subtype":"Figure","type":"Plot"},"ticker":{"id":"d54eae51-d5ee-4a40-8596-c1fdedb9ec8f","type":"BasicTicker"}},"id":"fd54132f-c980-40ae-aab6-5134e30bc1cb","type":"Grid"},{"attributes":{"source":{"id":"681ef7ac-b77a-486e-a97c-5f09a1013f8b","type":"ColumnDataSource"}},"id":"ebb7e942-ef0d-4fd1-9867-ba8a7157794a","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5259e0ab-0f41-473e-9ea0-24521d4443e8","type":"BoxSelectTool"}]},"id":"80e05103-3482-4e58-a01e-6fbf566c9930","type":"Toolbar"}],"root_ids":["61b17f9d-a3a5-4819-beb0-5f11514c5904"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"c499df5d-167e-4cd5-ab9a-50b351c5f098","elementid":"47f4d915-94f6-4b8b-ac1f-b2ccdfdf9693","modelid":"61b17f9d-a3a5-4819-beb0-5f11514c5904"}];
                
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
