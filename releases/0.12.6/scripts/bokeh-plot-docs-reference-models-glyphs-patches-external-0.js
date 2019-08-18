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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("02056fbc-921e-45f7-86a7-db68c1a3eea9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '02056fbc-921e-45f7-86a7-db68c1a3eea9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"2105bbbe-f30c-4bd2-81d4-d47758659663":{"roots":{"references":[{"attributes":{},"id":"8b08fc76-39d1-4890-b1c0-994a8472bcdd","type":"ToolEvents"},{"attributes":{"below":[{"id":"07aa1409-e588-4536-b043-6060d899aa0f","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"8993b0e1-cc7e-44ac-9290-336c077d25db","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"e2deb31e-7f36-4fd3-8da6-f65b7d43bf5d","type":"GlyphRenderer"},{"id":"07aa1409-e588-4536-b043-6060d899aa0f","type":"LinearAxis"},{"id":"8993b0e1-cc7e-44ac-9290-336c077d25db","type":"LinearAxis"},{"id":"1bb511e0-636f-4944-9a2b-41d97c5bef57","type":"Grid"},{"id":"34145cc2-4ef3-4302-8612-497ee1630b27","type":"Grid"}],"title":null,"tool_events":{"id":"8b08fc76-39d1-4890-b1c0-994a8472bcdd","type":"ToolEvents"},"toolbar":{"id":"83b42991-853f-4f5e-bcef-51dada76062a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4954b9dd-6861-4d3b-b5a8-15c11f7fa67d","type":"DataRange1d"},"x_scale":{"id":"c5479f1e-437b-4c77-b845-4116654f0441","type":"LinearScale"},"y_range":{"id":"73e5bf70-a9af-44a1-ab12-7e6442f5efd0","type":"DataRange1d"},"y_scale":{"id":"7889bf32-b8b7-40aa-bc99-2f5d0456c43c","type":"LinearScale"}},"id":"915b7ac5-0df3-4344-b639-585155234c4c","type":"Plot"},{"attributes":{},"id":"c5479f1e-437b-4c77-b845-4116654f0441","type":"LinearScale"},{"attributes":{},"id":"32a4975b-3cf2-4999-8181-0826a827f7b6","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"b0c7257f-2b26-44ae-a57b-40074878f86b","type":"BasicTickFormatter"},"plot":{"id":"915b7ac5-0df3-4344-b639-585155234c4c","type":"Plot"},"ticker":{"id":"fba51fed-1fae-486b-84ab-3bf36eb1331b","type":"BasicTicker"}},"id":"8993b0e1-cc7e-44ac-9290-336c077d25db","type":"LinearAxis"},{"attributes":{},"id":"832641f2-1228-4bbe-ad30-11d823651520","type":"BasicTicker"},{"attributes":{"callback":null},"id":"73e5bf70-a9af-44a1-ab12-7e6442f5efd0","type":"DataRange1d"},{"attributes":{},"id":"fba51fed-1fae-486b-84ab-3bf36eb1331b","type":"BasicTicker"},{"attributes":{"formatter":{"id":"32a4975b-3cf2-4999-8181-0826a827f7b6","type":"BasicTickFormatter"},"plot":{"id":"915b7ac5-0df3-4344-b639-585155234c4c","type":"Plot"},"ticker":{"id":"832641f2-1228-4bbe-ad30-11d823651520","type":"BasicTicker"}},"id":"07aa1409-e588-4536-b043-6060d899aa0f","type":"LinearAxis"},{"attributes":{},"id":"7889bf32-b8b7-40aa-bc99-2f5d0456c43c","type":"LinearScale"},{"attributes":{"callback":null},"id":"4954b9dd-6861-4d3b-b5a8-15c11f7fa67d","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"915b7ac5-0df3-4344-b639-585155234c4c","type":"Plot"},"ticker":{"id":"fba51fed-1fae-486b-84ab-3bf36eb1331b","type":"BasicTicker"}},"id":"34145cc2-4ef3-4302-8612-497ee1630b27","type":"Grid"},{"attributes":{"data_source":{"id":"0d79118b-983f-4645-bf73-f8c9016b1ee5","type":"ColumnDataSource"},"glyph":{"id":"aba1afd3-7ce8-4eec-b5df-a0238d19f901","type":"Patches"},"hover_glyph":null,"muted_glyph":null},"id":"e2deb31e-7f36-4fd3-8da6-f65b7d43bf5d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["ys","xs"],"data":{"xs":[{"__ndarray__":"uB6F61G4AMD2KFyPwvUAwAAAAAAAAADAFK5H4XoU/r+PwvUoXI/+vw==","dtype":"float64","shape":[5]},{"__ndarray__":"L90kBoGV+b/qJjEIrBz6vwAAAAAAAPi/FtnO91Pj9b/RItv5fmr2vw==","dtype":"float64","shape":[5]},{"__ndarray__":"7nw/NV668b/n+6nx0k3yvwAAAAAAAPC/MQisHFpk678lBoGVQ4vsvw==","dtype":"float64","shape":[5]},{"__ndarray__":"WDm0yHa+47/LoUW28/3kvwAAAAAAAOC/arx0kxgE1r9QjZduEoPYvw==","dtype":"float64","shape":[5]},{"__ndarray__":"VOOlm8QgwL8aL90kBoHFvwAAAAAAAAAAGi/dJAaBxT9U46WbxCDAPw==","dtype":"float64","shape":[5]},{"__ndarray__":"XI/C9Shc1z97FK5H4XrUPwAAAAAAAOA/wvUoXI/C5T9SuB6F61HkPw==","dtype":"float64","shape":[5]},{"__ndarray__":"MQisHFpk6z9CYOXQItvpPwAAAAAAAPA/30+Nl24S8z/n+6nx0k3yPw==","dtype":"float64","shape":[5]},{"__ndarray__":"WmQ730+N9T8j2/l+arz0PwAAAAAAAPg/3SQGgZVD+z+mm8QgsHL6Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"nMQgsHJo/T8lBoGVQ4v8PwAAAAAAAABA7nw/NV66AUCyne+nxksBQA==","dtype":"float64","shape":[5]}],"ys":[{"__ndarray__":"MzMzMzMzD0AUrkfhehQQQGZmZmZmZhBAFK5H4XoUEEAzMzMzMzMPQA==","dtype":"float64","shape":[5]},{"__ndarray__":"H4XrUbgeAUCTGARWDi0CQOF6FK5H4QJAkxgEVg4tAkAfhetRuB4BQA==","dtype":"float64","shape":[5]},{"__ndarray__":"KVyPwvUo7D/8qfHSTWLwP+xRuB6F6/E//Knx0k1i8D8pXI/C9SjsPw==","dtype":"float64","shape":[5]},{"__ndarray__":"uB6F61G4vj9Ei2zn+6nRP1K4HoXrUdg/RIts5/up0T+4HoXrUbi+Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"61G4HoXrwb946SYxCKycP+tRuB6F68E/eOkmMQisnD/rUbgehevBvw==","dtype":"float64","shape":[5]},{"__ndarray__":"mJmZmZmZuT/sUbgehevRP5qZmZmZmdk/7FG4HoXr0T+YmZmZmZm5Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"4XoUrkfh6j9QjZduEoPwP5DC9Shcj/I/UI2XbhKD8D/hehSuR+HqPw==","dtype":"float64","shape":[5]},{"__ndarray__":"pHA9CtejAEASg8DKoUUCQFyPwvUoXANAEoPAyqFFAkCkcD0K16MAQA==","dtype":"float64","shape":[5]},{"__ndarray__":"j8L1KFyPDkC+nxov3SQQQLgehetRuBBAvp8aL90kEECPwvUoXI8OQA==","dtype":"float64","shape":[5]}]}},"id":"0d79118b-983f-4645-bf73-f8c9016b1ee5","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"915b7ac5-0df3-4344-b639-585155234c4c","type":"Plot"},"ticker":{"id":"832641f2-1228-4bbe-ad30-11d823651520","type":"BasicTicker"}},"id":"1bb511e0-636f-4944-9a2b-41d97c5bef57","type":"Grid"},{"attributes":{"fill_color":{"value":"#fb9a99"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"aba1afd3-7ce8-4eec-b5df-a0238d19f901","type":"Patches"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"83b42991-853f-4f5e-bcef-51dada76062a","type":"Toolbar"},{"attributes":{},"id":"b0c7257f-2b26-44ae-a57b-40074878f86b","type":"BasicTickFormatter"}],"root_ids":["915b7ac5-0df3-4344-b639-585155234c4c"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"2105bbbe-f30c-4bd2-81d4-d47758659663","elementid":"02056fbc-921e-45f7-86a7-db68c1a3eea9","modelid":"915b7ac5-0df3-4344-b639-585155234c4c"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
