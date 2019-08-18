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
      };var element = document.getElementById("fceb5369-0db8-4b73-b738-b66000cf5711");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fceb5369-0db8-4b73-b738-b66000cf5711' but no matching script tag was found. ")
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
                    var docs_json = {"00b21ac5-4c42-4b75-8ada-e52b1f6bd7c9":{"roots":{"references":[{"attributes":{},"id":"f09bc5e8-1773-4694-8f38-b5fea56735ae","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"d97bb61d-39bc-46ca-857f-4c02516f77f5","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y","color","label"],"data":{"color":["#ef8a62","#67a9cf","#ef8a62","#67a9cf","#ef8a62","#67a9cf"],"label":["hi","lo","hi","lo","hi","lo"],"x":[1,2,3,4,5,6],"y":[2,1,2,1,2,1]}},"id":"9f74de7f-121b-4789-8ff7-beaf7d35a424","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"d24f55e5-23af-4340-9d5a-8dbc445b0067","type":"Title"},{"attributes":{},"id":"030c05ad-2069-4a4e-a607-d511b1472bd0","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"de861da9-a583-47e3-98a1-ba3b2d343da1","subtype":"Figure","type":"Plot"},"ticker":{"id":"5b1c8197-0d1a-499b-b5d3-27961d2565f9","type":"BasicTicker"}},"id":"f4f27c9b-48f6-4a1e-9c64-1e45172536a1","type":"Grid"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"0f715839-66bf-4d01-a8f3-dff04d5afdfd","type":"Circle"},{"attributes":{"items":[{"id":"eaf5bdfa-b1ce-4349-9dbc-7d60ef48781e","type":"LegendItem"}],"plot":{"id":"de861da9-a583-47e3-98a1-ba3b2d343da1","subtype":"Figure","type":"Plot"}},"id":"2e77f5e9-4a9e-43db-98ec-53602c195a5a","type":"Legend"},{"attributes":{"data_source":{"id":"9f74de7f-121b-4789-8ff7-beaf7d35a424","type":"ColumnDataSource"},"glyph":{"id":"0f715839-66bf-4d01-a8f3-dff04d5afdfd","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d97bb61d-39bc-46ca-857f-4c02516f77f5","type":"Circle"},"selection_glyph":null,"view":{"id":"8387f7ad-d1e6-41f8-b276-058520a1a5ee","type":"CDSView"}},"id":"a0381c0e-0fe6-4af5-93a7-074c1529c254","type":"GlyphRenderer"},{"attributes":{},"id":"fde4f362-13e7-4779-ac11-d6e3c7760399","type":"LinearScale"},{"attributes":{},"id":"a9926277-1572-44ce-b30b-4ded5b8ee3ad","type":"BasicTickFormatter"},{"attributes":{},"id":"7f726f3d-895f-4269-9865-d8d50834ae8f","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3db2c1a1-3530-49e8-b17a-46e4c72126ac","type":"SaveTool"}]},"id":"233f284e-c1e5-4d19-b2a3-908af84601aa","type":"Toolbar"},{"attributes":{},"id":"3db2c1a1-3530-49e8-b17a-46e4c72126ac","type":"SaveTool"},{"attributes":{"callback":null,"end":3},"id":"54ea9b80-d195-4b44-ac29-80f5b6797692","type":"Range1d"},{"attributes":{},"id":"5b1c8197-0d1a-499b-b5d3-27961d2565f9","type":"BasicTicker"},{"attributes":{"below":[{"id":"4f646bb5-a6f6-4cb8-98d6-c0156e7b580b","type":"LinearAxis"}],"left":[{"id":"2ab8d6b1-9312-4519-8b63-11c1eb26e816","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"4f646bb5-a6f6-4cb8-98d6-c0156e7b580b","type":"LinearAxis"},{"id":"d030bea9-025c-4e05-a167-0973f408c306","type":"Grid"},{"id":"2ab8d6b1-9312-4519-8b63-11c1eb26e816","type":"LinearAxis"},{"id":"f4f27c9b-48f6-4a1e-9c64-1e45172536a1","type":"Grid"},{"id":"2e77f5e9-4a9e-43db-98ec-53602c195a5a","type":"Legend"},{"id":"a0381c0e-0fe6-4af5-93a7-074c1529c254","type":"GlyphRenderer"}],"title":{"id":"d24f55e5-23af-4340-9d5a-8dbc445b0067","type":"Title"},"toolbar":{"id":"233f284e-c1e5-4d19-b2a3-908af84601aa","type":"Toolbar"},"x_range":{"id":"1fbcdaef-7de7-4b52-ac76-5017a1940cb4","type":"Range1d"},"x_scale":{"id":"f09bc5e8-1773-4694-8f38-b5fea56735ae","type":"LinearScale"},"y_range":{"id":"54ea9b80-d195-4b44-ac29-80f5b6797692","type":"Range1d"},"y_scale":{"id":"fde4f362-13e7-4779-ac11-d6e3c7760399","type":"LinearScale"}},"id":"de861da9-a583-47e3-98a1-ba3b2d343da1","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"030c05ad-2069-4a4e-a607-d511b1472bd0","type":"BasicTickFormatter"},"plot":{"id":"de861da9-a583-47e3-98a1-ba3b2d343da1","subtype":"Figure","type":"Plot"},"ticker":{"id":"7f726f3d-895f-4269-9865-d8d50834ae8f","type":"BasicTicker"}},"id":"4f646bb5-a6f6-4cb8-98d6-c0156e7b580b","type":"LinearAxis"},{"attributes":{"label":{"field":"label"},"renderers":[{"id":"a0381c0e-0fe6-4af5-93a7-074c1529c254","type":"GlyphRenderer"}]},"id":"eaf5bdfa-b1ce-4349-9dbc-7d60ef48781e","type":"LegendItem"},{"attributes":{"callback":null,"end":7},"id":"1fbcdaef-7de7-4b52-ac76-5017a1940cb4","type":"Range1d"},{"attributes":{"source":{"id":"9f74de7f-121b-4789-8ff7-beaf7d35a424","type":"ColumnDataSource"}},"id":"8387f7ad-d1e6-41f8-b276-058520a1a5ee","type":"CDSView"},{"attributes":{"plot":{"id":"de861da9-a583-47e3-98a1-ba3b2d343da1","subtype":"Figure","type":"Plot"},"ticker":{"id":"7f726f3d-895f-4269-9865-d8d50834ae8f","type":"BasicTicker"}},"id":"d030bea9-025c-4e05-a167-0973f408c306","type":"Grid"},{"attributes":{"formatter":{"id":"a9926277-1572-44ce-b30b-4ded5b8ee3ad","type":"BasicTickFormatter"},"plot":{"id":"de861da9-a583-47e3-98a1-ba3b2d343da1","subtype":"Figure","type":"Plot"},"ticker":{"id":"5b1c8197-0d1a-499b-b5d3-27961d2565f9","type":"BasicTicker"}},"id":"2ab8d6b1-9312-4519-8b63-11c1eb26e816","type":"LinearAxis"}],"root_ids":["de861da9-a583-47e3-98a1-ba3b2d343da1"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"00b21ac5-4c42-4b75-8ada-e52b1f6bd7c9","elementid":"fceb5369-0db8-4b73-b738-b66000cf5711","modelid":"de861da9-a583-47e3-98a1-ba3b2d343da1"}];
                
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
