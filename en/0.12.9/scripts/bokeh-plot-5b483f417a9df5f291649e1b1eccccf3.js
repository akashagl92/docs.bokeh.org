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
      };var element = document.getElementById("c06ebe1b-d12e-4de7-b9bf-320c98794016");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c06ebe1b-d12e-4de7-b9bf-320c98794016' but no matching script tag was found. ")
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
                    var docs_json = {"abb15b7d-2529-48d3-bef8-33c5c0b06e87":{"roots":{"references":[{"attributes":{"callback":null,"start":0},"id":"e25d07e0-d00b-46f0-8b23-c28e709c7e19","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"e06993aa-f1fd-48b7-a9e7-00bb186478a2","type":"Toolbar"},{"attributes":{"below":[{"id":"1135add9-59e5-4b22-bc36-05557e664dc2","type":"CategoricalAxis"}],"left":[{"id":"cd7ab28a-5f24-4e2c-bf7e-862844b90f6a","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"1135add9-59e5-4b22-bc36-05557e664dc2","type":"CategoricalAxis"},{"id":"abb8f485-c7b6-461a-a591-72c87bae36cf","type":"Grid"},{"id":"cd7ab28a-5f24-4e2c-bf7e-862844b90f6a","type":"LinearAxis"},{"id":"da251be9-a7ac-4255-b081-c0dc84e374ed","type":"Grid"},{"id":"e28a004c-45bb-40a2-a4ca-0f02ab9b4e88","type":"GlyphRenderer"}],"title":{"id":"2df170fd-8cb6-4fce-8344-c7fa2ca60a47","type":"Title"},"toolbar":{"id":"e06993aa-f1fd-48b7-a9e7-00bb186478a2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"569729eb-0f94-426c-b1fe-30ecc6003007","type":"FactorRange"},"x_scale":{"id":"19fb37ad-d0dd-4a33-a1a0-ba60d71e7738","type":"CategoricalScale"},"y_range":{"id":"e25d07e0-d00b-46f0-8b23-c28e709c7e19","type":"DataRange1d"},"y_scale":{"id":"8af62604-03ec-4034-9df5-74d45914e6f2","type":"LinearScale"}},"id":"76ddd2a4-778f-44de-8d38-653c824790c0","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"19fb37ad-d0dd-4a33-a1a0-ba60d71e7738","type":"CategoricalScale"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"569729eb-0f94-426c-b1fe-30ecc6003007","type":"FactorRange"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"edde32d0-7e1d-437f-8503-116651fbeafe","type":"VBar"},{"attributes":{},"id":"9ddea237-5d40-4d46-8618-e22221b32164","type":"CategoricalTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"76ddd2a4-778f-44de-8d38-653c824790c0","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ddea237-5d40-4d46-8618-e22221b32164","type":"CategoricalTicker"}},"id":"abb8f485-c7b6-461a-a591-72c87bae36cf","type":"Grid"},{"attributes":{"formatter":{"id":"e419e62f-e88b-49bb-a385-bd70e0ad9967","type":"CategoricalTickFormatter"},"plot":{"id":"76ddd2a4-778f-44de-8d38-653c824790c0","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ddea237-5d40-4d46-8618-e22221b32164","type":"CategoricalTicker"}},"id":"1135add9-59e5-4b22-bc36-05557e664dc2","type":"CategoricalAxis"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"2df170fd-8cb6-4fce-8344-c7fa2ca60a47","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"239123f5-5a2d-460b-b934-58c85b38ec1b","type":"VBar"},{"attributes":{"source":{"id":"085ebb33-8ccb-4419-8ae1-e6a541839b54","type":"ColumnDataSource"}},"id":"fe0f835b-b748-4a4c-9100-9ca95c4f48d9","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[5,3,4,2,4,6],"x":[["Apples",-0.5],["Pears",-0.2],["Nectarines",0.0],["Plums",0.3],["Grapes",0.1],["Strawberries",0.3]]}},"id":"085ebb33-8ccb-4419-8ae1-e6a541839b54","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"76ddd2a4-778f-44de-8d38-653c824790c0","subtype":"Figure","type":"Plot"},"ticker":{"id":"37061060-78fc-4400-9d36-4f95f6c15a0d","type":"BasicTicker"}},"id":"da251be9-a7ac-4255-b081-c0dc84e374ed","type":"Grid"},{"attributes":{},"id":"b11bb59f-74c8-4014-965a-6f5c002a8f0d","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"085ebb33-8ccb-4419-8ae1-e6a541839b54","type":"ColumnDataSource"},"glyph":{"id":"edde32d0-7e1d-437f-8503-116651fbeafe","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"239123f5-5a2d-460b-b934-58c85b38ec1b","type":"VBar"},"selection_glyph":null,"view":{"id":"fe0f835b-b748-4a4c-9100-9ca95c4f48d9","type":"CDSView"}},"id":"e28a004c-45bb-40a2-a4ca-0f02ab9b4e88","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"b11bb59f-74c8-4014-965a-6f5c002a8f0d","type":"BasicTickFormatter"},"plot":{"id":"76ddd2a4-778f-44de-8d38-653c824790c0","subtype":"Figure","type":"Plot"},"ticker":{"id":"37061060-78fc-4400-9d36-4f95f6c15a0d","type":"BasicTicker"}},"id":"cd7ab28a-5f24-4e2c-bf7e-862844b90f6a","type":"LinearAxis"},{"attributes":{},"id":"37061060-78fc-4400-9d36-4f95f6c15a0d","type":"BasicTicker"},{"attributes":{},"id":"8af62604-03ec-4034-9df5-74d45914e6f2","type":"LinearScale"},{"attributes":{},"id":"e419e62f-e88b-49bb-a385-bd70e0ad9967","type":"CategoricalTickFormatter"}],"root_ids":["76ddd2a4-778f-44de-8d38-653c824790c0"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"abb15b7d-2529-48d3-bef8-33c5c0b06e87","elementid":"c06ebe1b-d12e-4de7-b9bf-320c98794016","modelid":"76ddd2a4-778f-44de-8d38-653c824790c0"}];
                
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
