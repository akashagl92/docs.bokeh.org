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
      };var element = document.getElementById("645f11f4-02df-44f3-b15c-5ef15e4d193c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '645f11f4-02df-44f3-b15c-5ef15e4d193c' but no matching script tag was found. ")
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
                var docs_json = {"4d6665c6-5551-4658-bc8d-24dd055d1d87":{"roots":{"references":[{"attributes":{"below":[{"id":"31b47a5b-a6a4-4482-8209-5b9003583403","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"2a7806ee-5a0f-4eec-9a97-c8cfd8d5ed6d","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"f3cf8bc1-ce3b-47ca-841e-388d66c13c1c","type":"GlyphRenderer"},{"id":"31b47a5b-a6a4-4482-8209-5b9003583403","type":"LinearAxis"},{"id":"2a7806ee-5a0f-4eec-9a97-c8cfd8d5ed6d","type":"LinearAxis"},{"id":"d8cc9277-99fe-47cc-8e4b-49a68677a9c3","type":"Grid"},{"id":"4a4b6c67-f8ca-447b-a053-d67e186eaabd","type":"Grid"}],"title":null,"tool_events":{"id":"4577511b-74ae-4418-81b1-7facca216f07","type":"ToolEvents"},"toolbar":{"id":"c102b0f3-a548-45b5-b76b-ea6d7e7f31a2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"0a2f67ef-f2db-4a35-a818-b1c207484ab9","type":"DataRange1d"},"y_range":{"id":"d3a75b24-f8ed-4f00-aeca-bd06111944d6","type":"DataRange1d"}},"id":"a317bfc8-f215-4906-95f8-9648081eda13","type":"Plot"},{"attributes":{},"id":"bd811f54-5b91-4f4b-8082-5699913da943","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["xs","ys"],"data":{"xs":[{"__ndarray__":"uB6F61G4AMD2KFyPwvUAwAAAAAAAAADAFK5H4XoU/r+PwvUoXI/+vw==","dtype":"float64","shape":[5]},{"__ndarray__":"L90kBoGV+b/qJjEIrBz6vwAAAAAAAPi/FtnO91Pj9b/RItv5fmr2vw==","dtype":"float64","shape":[5]},{"__ndarray__":"7nw/NV668b/n+6nx0k3yvwAAAAAAAPC/MQisHFpk678lBoGVQ4vsvw==","dtype":"float64","shape":[5]},{"__ndarray__":"WDm0yHa+47/LoUW28/3kvwAAAAAAAOC/arx0kxgE1r9QjZduEoPYvw==","dtype":"float64","shape":[5]},{"__ndarray__":"VOOlm8QgwL8aL90kBoHFvwAAAAAAAAAAGi/dJAaBxT9U46WbxCDAPw==","dtype":"float64","shape":[5]},{"__ndarray__":"XI/C9Shc1z97FK5H4XrUPwAAAAAAAOA/wvUoXI/C5T9SuB6F61HkPw==","dtype":"float64","shape":[5]},{"__ndarray__":"MQisHFpk6z9CYOXQItvpPwAAAAAAAPA/30+Nl24S8z/n+6nx0k3yPw==","dtype":"float64","shape":[5]},{"__ndarray__":"WmQ730+N9T8j2/l+arz0PwAAAAAAAPg/3SQGgZVD+z+mm8QgsHL6Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"nMQgsHJo/T8lBoGVQ4v8PwAAAAAAAABA7nw/NV66AUCyne+nxksBQA==","dtype":"float64","shape":[5]}],"ys":[{"__ndarray__":"MzMzMzMzD0AUrkfhehQQQGZmZmZmZhBAFK5H4XoUEEAzMzMzMzMPQA==","dtype":"float64","shape":[5]},{"__ndarray__":"H4XrUbgeAUCTGARWDi0CQOF6FK5H4QJAkxgEVg4tAkAfhetRuB4BQA==","dtype":"float64","shape":[5]},{"__ndarray__":"KVyPwvUo7D/8qfHSTWLwP+xRuB6F6/E//Knx0k1i8D8pXI/C9SjsPw==","dtype":"float64","shape":[5]},{"__ndarray__":"uB6F61G4vj9Ei2zn+6nRP1K4HoXrUdg/RIts5/up0T+4HoXrUbi+Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"61G4HoXrwb946SYxCKycP+tRuB6F68E/eOkmMQisnD/rUbgehevBvw==","dtype":"float64","shape":[5]},{"__ndarray__":"mJmZmZmZuT/sUbgehevRP5qZmZmZmdk/7FG4HoXr0T+YmZmZmZm5Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"4XoUrkfh6j9QjZduEoPwP5DC9Shcj/I/UI2XbhKD8D/hehSuR+HqPw==","dtype":"float64","shape":[5]},{"__ndarray__":"pHA9CtejAEASg8DKoUUCQFyPwvUoXANAEoPAyqFFAkCkcD0K16MAQA==","dtype":"float64","shape":[5]},{"__ndarray__":"j8L1KFyPDkC+nxov3SQQQLgehetRuBBAvp8aL90kEECPwvUoXI8OQA==","dtype":"float64","shape":[5]}]}},"id":"39108d7b-9a63-4d5a-8f07-a0ba08c94a12","type":"ColumnDataSource"},{"attributes":{},"id":"34c6775d-57ef-4683-96ca-b0bddb37da90","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"a317bfc8-f215-4906-95f8-9648081eda13","type":"Plot"},"ticker":{"id":"dfa9413a-9096-489e-b306-9955a2a755ae","type":"BasicTicker"}},"id":"d8cc9277-99fe-47cc-8e4b-49a68677a9c3","type":"Grid"},{"attributes":{"callback":null},"id":"0a2f67ef-f2db-4a35-a818-b1c207484ab9","type":"DataRange1d"},{"attributes":{"formatter":{"id":"bd811f54-5b91-4f4b-8082-5699913da943","type":"BasicTickFormatter"},"plot":{"id":"a317bfc8-f215-4906-95f8-9648081eda13","type":"Plot"},"ticker":{"id":"dfa9413a-9096-489e-b306-9955a2a755ae","type":"BasicTicker"}},"id":"31b47a5b-a6a4-4482-8209-5b9003583403","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"a317bfc8-f215-4906-95f8-9648081eda13","type":"Plot"},"ticker":{"id":"1cec3ae7-363f-4289-9a49-a21f90c4e3de","type":"BasicTicker"}},"id":"4a4b6c67-f8ca-447b-a053-d67e186eaabd","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c102b0f3-a548-45b5-b76b-ea6d7e7f31a2","type":"Toolbar"},{"attributes":{"formatter":{"id":"34c6775d-57ef-4683-96ca-b0bddb37da90","type":"BasicTickFormatter"},"plot":{"id":"a317bfc8-f215-4906-95f8-9648081eda13","type":"Plot"},"ticker":{"id":"1cec3ae7-363f-4289-9a49-a21f90c4e3de","type":"BasicTicker"}},"id":"2a7806ee-5a0f-4eec-9a97-c8cfd8d5ed6d","type":"LinearAxis"},{"attributes":{},"id":"dfa9413a-9096-489e-b306-9955a2a755ae","type":"BasicTicker"},{"attributes":{"callback":null},"id":"d3a75b24-f8ed-4f00-aeca-bd06111944d6","type":"DataRange1d"},{"attributes":{},"id":"4577511b-74ae-4418-81b1-7facca216f07","type":"ToolEvents"},{"attributes":{},"id":"1cec3ae7-363f-4289-9a49-a21f90c4e3de","type":"BasicTicker"},{"attributes":{"data_source":{"id":"39108d7b-9a63-4d5a-8f07-a0ba08c94a12","type":"ColumnDataSource"},"glyph":{"id":"cd77d4bc-d38d-4670-8189-7a698c3a3a78","type":"Patches"},"hover_glyph":null,"muted_glyph":null},"id":"f3cf8bc1-ce3b-47ca-841e-388d66c13c1c","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fb9a99"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"cd77d4bc-d38d-4670-8189-7a698c3a3a78","type":"Patches"}],"root_ids":["a317bfc8-f215-4906-95f8-9648081eda13"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"4d6665c6-5551-4658-bc8d-24dd055d1d87","elementid":"645f11f4-02df-44f3-b15c-5ef15e4d193c","modelid":"a317bfc8-f215-4906-95f8-9648081eda13"}];
                
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
