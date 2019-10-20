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
      };var element = document.getElementById("4c860118-816f-4d01-8812-55ceca4b7121");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4c860118-816f-4d01-8812-55ceca4b7121' but no matching script tag was found. ")
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
                    var docs_json = {"660ec124-c88e-47e9-babe-7be407e1678d":{"roots":{"references":[{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"ef65f2b7-dba9-4bc9-8308-9a3345c1b988","type":"FactorRange"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"fdfaae4f-008e-4cfb-bb90-2e82ce845491","type":"GlyphRenderer"}]},"id":"b6a325da-4e92-4dcf-8bc7-8bdc6eca25ec","type":"LegendItem"},{"attributes":{"dimension":1,"plot":{"id":"c619ae33-32b7-422f-acda-60cd79211f99","subtype":"Figure","type":"Plot"},"ticker":{"id":"3b6438d2-1fae-46dd-a1c9-ad7de4ede68d","type":"BasicTicker"}},"id":"54929591-d1e8-43ac-ad38-814a69b9c537","type":"Grid"},{"attributes":{"items":[{"id":"b6a325da-4e92-4dcf-8bc7-8bdc6eca25ec","type":"LegendItem"},{"id":"c789e3d8-ce43-496f-b552-f00216dcd46f","type":"LegendItem"},{"id":"62699cc2-704b-48e9-95e9-6be1a5e5fb03","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"c619ae33-32b7-422f-acda-60cd79211f99","subtype":"Figure","type":"Plot"}},"id":"a7c99b89-4b20-4a87-b934-440eca62ad2f","type":"Legend"},{"attributes":{"data_source":{"id":"38db4d94-4f1b-460f-885e-cb0ccac64f9b","type":"ColumnDataSource"},"glyph":{"id":"d18f9a65-6608-43e4-b981-665763b21f08","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1d8e448b-2ba6-4dd4-81ac-cc9c2deb2921","type":"VBar"},"selection_glyph":null,"view":{"id":"74e8d433-1336-4e58-ac7f-7b11d3c72fea","type":"CDSView"}},"id":"adb94fd5-aece-4da6-8f9a-d1b76c499ce5","type":"GlyphRenderer"},{"attributes":{"bottom":{"expr":{"id":"23571ca3-8946-47c3-8fcd-8f5bdea91fa0","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"22086389-c465-4009-8e83-c9c7d8ca4b8f","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"f1b4b381-e405-445b-82cb-e4802c0420ba","type":"VBar"},{"attributes":{"source":{"id":"38db4d94-4f1b-460f-885e-cb0ccac64f9b","type":"ColumnDataSource"}},"id":"74e8d433-1336-4e58-ac7f-7b11d3c72fea","type":"CDSView"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"5dbd80aa-b673-46ff-b562-22910a07e8a1","type":"Title"},{"attributes":{"fields":[]},"id":"91bf81b5-4269-4af4-b12d-8c790cf1bf15","type":"Stack"},{"attributes":{"data_source":{"id":"38db4d94-4f1b-460f-885e-cb0ccac64f9b","type":"ColumnDataSource"},"glyph":{"id":"a1adeb09-92dd-4a4c-99aa-326dc1d96840","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"485f26ce-2236-4f0d-94f2-1a75468ccf4f","type":"VBar"},"selection_glyph":null,"view":{"id":"2ba1a351-a86c-4b9f-b48e-f3f6c53d240d","type":"CDSView"}},"id":"fdfaae4f-008e-4cfb-bb90-2e82ce845491","type":"GlyphRenderer"},{"attributes":{"source":{"id":"38db4d94-4f1b-460f-885e-cb0ccac64f9b","type":"ColumnDataSource"}},"id":"2ba1a351-a86c-4b9f-b48e-f3f6c53d240d","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"bb7c073d-8594-4ab2-9bae-766aa467df2c","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"947827d7-4d95-43e2-b3cb-9e90cbaea44d","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"1d8e448b-2ba6-4dd4-81ac-cc9c2deb2921","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"91bf81b5-4269-4af4-b12d-8c790cf1bf15","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"5431a035-420c-4f7d-a66a-22824933201d","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"a1adeb09-92dd-4a4c-99aa-326dc1d96840","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"91bf81b5-4269-4af4-b12d-8c790cf1bf15","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"5431a035-420c-4f7d-a66a-22824933201d","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"485f26ce-2236-4f0d-94f2-1a75468ccf4f","type":"VBar"},{"attributes":{"fields":["2015","2016","2017"]},"id":"947827d7-4d95-43e2-b3cb-9e90cbaea44d","type":"Stack"},{"attributes":{"callback":null,"start":0},"id":"c6ac3bcf-d51d-446a-bec7-ec8dad705255","type":"DataRange1d"},{"attributes":{"source":{"id":"38db4d94-4f1b-460f-885e-cb0ccac64f9b","type":"ColumnDataSource"}},"id":"78be09a1-78ad-4874-85f9-b5a36a67fb93","type":"CDSView"},{"attributes":{},"id":"0ee4977b-22e7-4a78-9600-7ad8ef5561a9","type":"CategoricalScale"},{"attributes":{"data_source":{"id":"38db4d94-4f1b-460f-885e-cb0ccac64f9b","type":"ColumnDataSource"},"glyph":{"id":"c21a7e5a-cc7d-4559-8a28-eb34375c403a","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f1b4b381-e405-445b-82cb-e4802c0420ba","type":"VBar"},"selection_glyph":null,"view":{"id":"78be09a1-78ad-4874-85f9-b5a36a67fb93","type":"CDSView"}},"id":"03cfa373-b73b-4019-ae11-851173839afe","type":"GlyphRenderer"},{"attributes":{},"id":"03aa7c9c-e484-4567-b5c0-857d05c84e1b","type":"CategoricalTickFormatter"},{"attributes":{"fields":["2015"]},"id":"23571ca3-8946-47c3-8fcd-8f5bdea91fa0","type":"Stack"},{"attributes":{},"id":"9b43bb64-4042-4222-a781-1f3a648103db","type":"BasicTickFormatter"},{"attributes":{},"id":"3b6438d2-1fae-46dd-a1c9-ad7de4ede68d","type":"BasicTicker"},{"attributes":{"fields":["2015","2016"]},"id":"bb7c073d-8594-4ab2-9bae-766aa467df2c","type":"Stack"},{"attributes":{"formatter":{"id":"03aa7c9c-e484-4567-b5c0-857d05c84e1b","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"c619ae33-32b7-422f-acda-60cd79211f99","subtype":"Figure","type":"Plot"},"ticker":{"id":"c7af1e1b-6597-4ae1-b847-a365a41fce16","type":"CategoricalTicker"}},"id":"16c4fedd-93f4-4f2f-b9ca-4fd0e61ce7e3","type":"CategoricalAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"0fcdafdf-b0e9-43be-9cdc-19718e75ed25","type":"Toolbar"},{"attributes":{"fields":["2015"]},"id":"5431a035-420c-4f7d-a66a-22824933201d","type":"Stack"},{"attributes":{"formatter":{"id":"9b43bb64-4042-4222-a781-1f3a648103db","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"c619ae33-32b7-422f-acda-60cd79211f99","subtype":"Figure","type":"Plot"},"ticker":{"id":"3b6438d2-1fae-46dd-a1c9-ad7de4ede68d","type":"BasicTicker"}},"id":"afb773f2-63f7-41d4-a70d-4bed44472a30","type":"LinearAxis"},{"attributes":{"fields":["2015","2016"]},"id":"22086389-c465-4009-8e83-c9c7d8ca4b8f","type":"Stack"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"adb94fd5-aece-4da6-8f9a-d1b76c499ce5","type":"GlyphRenderer"}]},"id":"62699cc2-704b-48e9-95e9-6be1a5e5fb03","type":"LegendItem"},{"attributes":{"bottom":{"expr":{"id":"23571ca3-8946-47c3-8fcd-8f5bdea91fa0","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"22086389-c465-4009-8e83-c9c7d8ca4b8f","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"c21a7e5a-cc7d-4559-8a28-eb34375c403a","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"bb7c073d-8594-4ab2-9bae-766aa467df2c","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"947827d7-4d95-43e2-b3cb-9e90cbaea44d","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"d18f9a65-6608-43e4-b981-665763b21f08","type":"VBar"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"03cfa373-b73b-4019-ae11-851173839afe","type":"GlyphRenderer"}]},"id":"c789e3d8-ce43-496f-b552-f00216dcd46f","type":"LegendItem"},{"attributes":{},"id":"c7af1e1b-6597-4ae1-b847-a365a41fce16","type":"CategoricalTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"c619ae33-32b7-422f-acda-60cd79211f99","subtype":"Figure","type":"Plot"},"ticker":{"id":"c7af1e1b-6597-4ae1-b847-a365a41fce16","type":"CategoricalTicker"}},"id":"17834591-9ebd-446a-b7f3-8fb6bc72b2d9","type":"Grid"},{"attributes":{},"id":"026ba531-849f-4bf0-9740-ba400e455f3f","type":"LinearScale"},{"attributes":{"below":[{"id":"16c4fedd-93f4-4f2f-b9ca-4fd0e61ce7e3","type":"CategoricalAxis"}],"left":[{"id":"afb773f2-63f7-41d4-a70d-4bed44472a30","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"16c4fedd-93f4-4f2f-b9ca-4fd0e61ce7e3","type":"CategoricalAxis"},{"id":"17834591-9ebd-446a-b7f3-8fb6bc72b2d9","type":"Grid"},{"id":"afb773f2-63f7-41d4-a70d-4bed44472a30","type":"LinearAxis"},{"id":"54929591-d1e8-43ac-ad38-814a69b9c537","type":"Grid"},{"id":"a7c99b89-4b20-4a87-b934-440eca62ad2f","type":"Legend"},{"id":"fdfaae4f-008e-4cfb-bb90-2e82ce845491","type":"GlyphRenderer"},{"id":"03cfa373-b73b-4019-ae11-851173839afe","type":"GlyphRenderer"},{"id":"adb94fd5-aece-4da6-8f9a-d1b76c499ce5","type":"GlyphRenderer"}],"title":{"id":"5dbd80aa-b673-46ff-b562-22910a07e8a1","type":"Title"},"toolbar":{"id":"0fcdafdf-b0e9-43be-9cdc-19718e75ed25","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ef65f2b7-dba9-4bc9-8308-9a3345c1b988","type":"FactorRange"},"x_scale":{"id":"0ee4977b-22e7-4a78-9600-7ad8ef5561a9","type":"CategoricalScale"},"y_range":{"id":"c6ac3bcf-d51d-446a-bec7-ec8dad705255","type":"DataRange1d"},"y_scale":{"id":"026ba531-849f-4bf0-9740-ba400e455f3f","type":"LinearScale"}},"id":"c619ae33-32b7-422f-acda-60cd79211f99","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"38db4d94-4f1b-460f-885e-cb0ccac64f9b","type":"ColumnDataSource"}],"root_ids":["c619ae33-32b7-422f-acda-60cd79211f99"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"660ec124-c88e-47e9-babe-7be407e1678d","elementid":"4c860118-816f-4d01-8812-55ceca4b7121","modelid":"c619ae33-32b7-422f-acda-60cd79211f99"}];
                
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
