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
      };var element = document.getElementById("44c08b92-9556-45d3-9460-89e916fc6594");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '44c08b92-9556-45d3-9460-89e916fc6594' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"fa9d9789-3d3d-47bf-8a5a-42d5f1ce1c2d":{"roots":{"references":[{"attributes":{},"id":"33be8c9b-d27d-42fa-b9e7-eec5760bfd1f","type":"BasicTicker"},{"attributes":{},"id":"216ee27f-d05f-4373-9bf0-debb238cdcce","type":"BasicTicker"},{"attributes":{"plot":{"id":"9f4565ea-acef-4ec4-b6c8-4dd40bd40de1","type":"Plot"},"ticker":{"id":"33be8c9b-d27d-42fa-b9e7-eec5760bfd1f","type":"BasicTicker"}},"id":"d0d36a79-dd7e-4004-9980-2d4d7dafdb0d","type":"Grid"},{"attributes":{},"id":"cc58d32b-eff4-411f-8ef5-da374e486bff","type":"ToolEvents"},{"attributes":{"below":[{"id":"68f7fe19-e852-4e07-916c-51f7c4bf6033","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"506b18b3-12f5-465d-8382-777298db7700","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"b7763b4a-5c53-4a58-9cca-82ea1f924244","type":"GlyphRenderer"},{"id":"68f7fe19-e852-4e07-916c-51f7c4bf6033","type":"LinearAxis"},{"id":"506b18b3-12f5-465d-8382-777298db7700","type":"LinearAxis"},{"id":"d0d36a79-dd7e-4004-9980-2d4d7dafdb0d","type":"Grid"},{"id":"7cf695f0-fc85-4002-a46d-7cdbc775c45b","type":"Grid"}],"title":null,"tool_events":{"id":"cc58d32b-eff4-411f-8ef5-da374e486bff","type":"ToolEvents"},"toolbar":{"id":"0ecf40f6-d9a1-4097-81e2-2c8984102b4c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3c52e864-cd7c-48c2-aad2-6959c4c0fdc7","type":"DataRange1d"},"y_range":{"id":"002ece6b-388f-4889-802c-18ad9cf2dcf1","type":"DataRange1d"}},"id":"9f4565ea-acef-4ec4-b6c8-4dd40bd40de1","type":"Plot"},{"attributes":{"callback":null,"column_names":["xs","ys"],"data":{"xs":[{"__ndarray__":"uB6F61G4AMD2KFyPwvUAwAAAAAAAAADAFK5H4XoU/r+PwvUoXI/+vw==","dtype":"float64","shape":[5]},{"__ndarray__":"L90kBoGV+b/qJjEIrBz6vwAAAAAAAPi/FtnO91Pj9b/RItv5fmr2vw==","dtype":"float64","shape":[5]},{"__ndarray__":"7nw/NV668b/n+6nx0k3yvwAAAAAAAPC/MQisHFpk678lBoGVQ4vsvw==","dtype":"float64","shape":[5]},{"__ndarray__":"WDm0yHa+47/LoUW28/3kvwAAAAAAAOC/arx0kxgE1r9QjZduEoPYvw==","dtype":"float64","shape":[5]},{"__ndarray__":"VOOlm8QgwL8aL90kBoHFvwAAAAAAAAAAGi/dJAaBxT9U46WbxCDAPw==","dtype":"float64","shape":[5]},{"__ndarray__":"XI/C9Shc1z97FK5H4XrUPwAAAAAAAOA/wvUoXI/C5T9SuB6F61HkPw==","dtype":"float64","shape":[5]},{"__ndarray__":"MQisHFpk6z9CYOXQItvpPwAAAAAAAPA/30+Nl24S8z/n+6nx0k3yPw==","dtype":"float64","shape":[5]},{"__ndarray__":"WmQ730+N9T8j2/l+arz0PwAAAAAAAPg/3SQGgZVD+z+mm8QgsHL6Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"nMQgsHJo/T8lBoGVQ4v8PwAAAAAAAABA7nw/NV66AUCyne+nxksBQA==","dtype":"float64","shape":[5]}],"ys":[{"__ndarray__":"MzMzMzMzD0AUrkfhehQQQGZmZmZmZhBAFK5H4XoUEEAzMzMzMzMPQA==","dtype":"float64","shape":[5]},{"__ndarray__":"H4XrUbgeAUCTGARWDi0CQOF6FK5H4QJAkxgEVg4tAkAfhetRuB4BQA==","dtype":"float64","shape":[5]},{"__ndarray__":"KVyPwvUo7D/8qfHSTWLwP+xRuB6F6/E//Knx0k1i8D8pXI/C9SjsPw==","dtype":"float64","shape":[5]},{"__ndarray__":"uB6F61G4vj9Ei2zn+6nRP1K4HoXrUdg/RIts5/up0T+4HoXrUbi+Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"61G4HoXrwb946SYxCKycP+tRuB6F68E/eOkmMQisnD/rUbgehevBvw==","dtype":"float64","shape":[5]},{"__ndarray__":"mJmZmZmZuT/sUbgehevRP5qZmZmZmdk/7FG4HoXr0T+YmZmZmZm5Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"4XoUrkfh6j9QjZduEoPwP5DC9Shcj/I/UI2XbhKD8D/hehSuR+HqPw==","dtype":"float64","shape":[5]},{"__ndarray__":"pHA9CtejAEASg8DKoUUCQFyPwvUoXANAEoPAyqFFAkCkcD0K16MAQA==","dtype":"float64","shape":[5]},{"__ndarray__":"j8L1KFyPDkC+nxov3SQQQLgehetRuBBAvp8aL90kEECPwvUoXI8OQA==","dtype":"float64","shape":[5]}]}},"id":"d4bd86fb-5db4-452e-9e40-f96391fe1f89","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"d29b8393-bfb0-4ddb-a0a8-94edc747b50d","type":"BasicTickFormatter"},"plot":{"id":"9f4565ea-acef-4ec4-b6c8-4dd40bd40de1","type":"Plot"},"ticker":{"id":"216ee27f-d05f-4373-9bf0-debb238cdcce","type":"BasicTicker"}},"id":"506b18b3-12f5-465d-8382-777298db7700","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"0ecf40f6-d9a1-4097-81e2-2c8984102b4c","type":"Toolbar"},{"attributes":{"formatter":{"id":"36e426b8-2270-4198-9bef-deca6b737d68","type":"BasicTickFormatter"},"plot":{"id":"9f4565ea-acef-4ec4-b6c8-4dd40bd40de1","type":"Plot"},"ticker":{"id":"33be8c9b-d27d-42fa-b9e7-eec5760bfd1f","type":"BasicTicker"}},"id":"68f7fe19-e852-4e07-916c-51f7c4bf6033","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"9f4565ea-acef-4ec4-b6c8-4dd40bd40de1","type":"Plot"},"ticker":{"id":"216ee27f-d05f-4373-9bf0-debb238cdcce","type":"BasicTicker"}},"id":"7cf695f0-fc85-4002-a46d-7cdbc775c45b","type":"Grid"},{"attributes":{"callback":null},"id":"002ece6b-388f-4889-802c-18ad9cf2dcf1","type":"DataRange1d"},{"attributes":{"callback":null},"id":"3c52e864-cd7c-48c2-aad2-6959c4c0fdc7","type":"DataRange1d"},{"attributes":{},"id":"d29b8393-bfb0-4ddb-a0a8-94edc747b50d","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"#8073ac"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"520b4fe4-4d52-4df4-8453-1e5c530893f1","type":"MultiLine"},{"attributes":{},"id":"36e426b8-2270-4198-9bef-deca6b737d68","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"d4bd86fb-5db4-452e-9e40-f96391fe1f89","type":"ColumnDataSource"},"glyph":{"id":"520b4fe4-4d52-4df4-8453-1e5c530893f1","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null},"id":"b7763b4a-5c53-4a58-9cca-82ea1f924244","type":"GlyphRenderer"}],"root_ids":["9f4565ea-acef-4ec4-b6c8-4dd40bd40de1"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"fa9d9789-3d3d-47bf-8a5a-42d5f1ce1c2d","elementid":"44c08b92-9556-45d3-9460-89e916fc6594","modelid":"9f4565ea-acef-4ec4-b6c8-4dd40bd40de1"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
