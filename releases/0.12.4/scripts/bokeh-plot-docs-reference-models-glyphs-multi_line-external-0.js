(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("761d331f-e5e9-4909-8ebc-d089b5ee5f2a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '761d331f-e5e9-4909-8ebc-d089b5ee5f2a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"756ce766-22ac-433b-9ec7-8f24a4bec36a":{"roots":{"references":[{"attributes":{},"id":"c9aae88d-1928-4e78-a8df-240a0c09913b","type":"ToolEvents"},{"attributes":{},"id":"99a490f5-8c2d-4fb6-9ecc-382a4ee7cb9f","type":"BasicTicker"},{"attributes":{"data_source":{"id":"8619e61a-436b-4481-8fcb-d4937706ea3b","type":"ColumnDataSource"},"glyph":{"id":"81e089a8-efc2-4eb2-9763-6a3ae1c364ec","type":"MultiLine"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c7cdc310-9bd9-40ab-a90b-1bc7c1ae0d62","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"0cf562df-62e5-4676-92b0-50aeaa9fc145","type":"Plot"},"ticker":{"id":"056d03e0-46a0-42df-a174-084c016a07c1","type":"BasicTicker"}},"id":"f182a42d-214a-4931-862c-74ffcaf4f4b0","type":"Grid"},{"attributes":{},"id":"8cb271f3-5a58-4d77-ac57-d95fd37ca4bd","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c6ec532e-d3b2-4a10-9f54-32e3ce88b44c","type":"Toolbar"},{"attributes":{"formatter":{"id":"217af70e-7a62-4f1a-ae57-7b2d4dc99b4c","type":"BasicTickFormatter"},"plot":{"id":"0cf562df-62e5-4676-92b0-50aeaa9fc145","type":"Plot"},"ticker":{"id":"99a490f5-8c2d-4fb6-9ecc-382a4ee7cb9f","type":"BasicTicker"}},"id":"bacca2bc-b9bb-4000-b5ca-b53fcc7dea9b","type":"LinearAxis"},{"attributes":{"formatter":{"id":"8cb271f3-5a58-4d77-ac57-d95fd37ca4bd","type":"BasicTickFormatter"},"plot":{"id":"0cf562df-62e5-4676-92b0-50aeaa9fc145","type":"Plot"},"ticker":{"id":"056d03e0-46a0-42df-a174-084c016a07c1","type":"BasicTicker"}},"id":"bbdcc399-d940-4ecf-bf04-025b64041519","type":"LinearAxis"},{"attributes":{},"id":"217af70e-7a62-4f1a-ae57-7b2d4dc99b4c","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"0cf562df-62e5-4676-92b0-50aeaa9fc145","type":"Plot"},"ticker":{"id":"99a490f5-8c2d-4fb6-9ecc-382a4ee7cb9f","type":"BasicTicker"}},"id":"bbbacedf-6f55-444e-b794-2dbe3840e98b","type":"Grid"},{"attributes":{"line_color":{"value":"#8073ac"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"81e089a8-efc2-4eb2-9763-6a3ae1c364ec","type":"MultiLine"},{"attributes":{"callback":null},"id":"3b908f2b-4501-445c-9c22-428766515414","type":"DataRange1d"},{"attributes":{},"id":"056d03e0-46a0-42df-a174-084c016a07c1","type":"BasicTicker"},{"attributes":{"below":[{"id":"bacca2bc-b9bb-4000-b5ca-b53fcc7dea9b","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"bbdcc399-d940-4ecf-bf04-025b64041519","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"c7cdc310-9bd9-40ab-a90b-1bc7c1ae0d62","type":"GlyphRenderer"},{"id":"bacca2bc-b9bb-4000-b5ca-b53fcc7dea9b","type":"LinearAxis"},{"id":"bbdcc399-d940-4ecf-bf04-025b64041519","type":"LinearAxis"},{"id":"bbbacedf-6f55-444e-b794-2dbe3840e98b","type":"Grid"},{"id":"f182a42d-214a-4931-862c-74ffcaf4f4b0","type":"Grid"}],"title":null,"tool_events":{"id":"c9aae88d-1928-4e78-a8df-240a0c09913b","type":"ToolEvents"},"toolbar":{"id":"c6ec532e-d3b2-4a10-9f54-32e3ce88b44c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3b908f2b-4501-445c-9c22-428766515414","type":"DataRange1d"},"y_range":{"id":"4d245849-9ab1-4299-b0c7-15fff6b7d364","type":"DataRange1d"}},"id":"0cf562df-62e5-4676-92b0-50aeaa9fc145","type":"Plot"},{"attributes":{"callback":null},"id":"4d245849-9ab1-4299-b0c7-15fff6b7d364","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["xs","ys"],"data":{"xs":[{"__ndarray__":"uB6F61G4AMD2KFyPwvUAwAAAAAAAAADAFK5H4XoU/r+PwvUoXI/+vw==","dtype":"float64","shape":[5]},{"__ndarray__":"L90kBoGV+b/qJjEIrBz6vwAAAAAAAPi/FtnO91Pj9b/RItv5fmr2vw==","dtype":"float64","shape":[5]},{"__ndarray__":"7nw/NV668b/n+6nx0k3yvwAAAAAAAPC/MQisHFpk678lBoGVQ4vsvw==","dtype":"float64","shape":[5]},{"__ndarray__":"WDm0yHa+47/LoUW28/3kvwAAAAAAAOC/arx0kxgE1r9QjZduEoPYvw==","dtype":"float64","shape":[5]},{"__ndarray__":"VOOlm8QgwL8aL90kBoHFvwAAAAAAAAAAGi/dJAaBxT9U46WbxCDAPw==","dtype":"float64","shape":[5]},{"__ndarray__":"XI/C9Shc1z97FK5H4XrUPwAAAAAAAOA/wvUoXI/C5T9SuB6F61HkPw==","dtype":"float64","shape":[5]},{"__ndarray__":"MQisHFpk6z9CYOXQItvpPwAAAAAAAPA/30+Nl24S8z/n+6nx0k3yPw==","dtype":"float64","shape":[5]},{"__ndarray__":"WmQ730+N9T8j2/l+arz0PwAAAAAAAPg/3SQGgZVD+z+mm8QgsHL6Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"nMQgsHJo/T8lBoGVQ4v8PwAAAAAAAABA7nw/NV66AUCyne+nxksBQA==","dtype":"float64","shape":[5]}],"ys":[{"__ndarray__":"MzMzMzMzD0AUrkfhehQQQGZmZmZmZhBAFK5H4XoUEEAzMzMzMzMPQA==","dtype":"float64","shape":[5]},{"__ndarray__":"H4XrUbgeAUCTGARWDi0CQOF6FK5H4QJAkxgEVg4tAkAfhetRuB4BQA==","dtype":"float64","shape":[5]},{"__ndarray__":"KVyPwvUo7D/8qfHSTWLwP+xRuB6F6/E//Knx0k1i8D8pXI/C9SjsPw==","dtype":"float64","shape":[5]},{"__ndarray__":"uB6F61G4vj9Ei2zn+6nRP1K4HoXrUdg/RIts5/up0T+4HoXrUbi+Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"61G4HoXrwb946SYxCKycP+tRuB6F68E/eOkmMQisnD/rUbgehevBvw==","dtype":"float64","shape":[5]},{"__ndarray__":"mJmZmZmZuT/sUbgehevRP5qZmZmZmdk/7FG4HoXr0T+YmZmZmZm5Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"4XoUrkfh6j9QjZduEoPwP5DC9Shcj/I/UI2XbhKD8D/hehSuR+HqPw==","dtype":"float64","shape":[5]},{"__ndarray__":"pHA9CtejAEASg8DKoUUCQFyPwvUoXANAEoPAyqFFAkCkcD0K16MAQA==","dtype":"float64","shape":[5]},{"__ndarray__":"j8L1KFyPDkC+nxov3SQQQLgehetRuBBAvp8aL90kEECPwvUoXI8OQA==","dtype":"float64","shape":[5]}]}},"id":"8619e61a-436b-4481-8fcb-d4937706ea3b","type":"ColumnDataSource"}],"root_ids":["0cf562df-62e5-4676-92b0-50aeaa9fc145"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"756ce766-22ac-433b-9ec7-8f24a4bec36a","elementid":"761d331f-e5e9-4909-8ebc-d089b5ee5f2a","modelid":"0cf562df-62e5-4676-92b0-50aeaa9fc145"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
