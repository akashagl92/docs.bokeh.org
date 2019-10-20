document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("735d0773-9b47-4024-901d-bf547d72dd19");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '735d0773-9b47-4024-901d-bf547d72dd19' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"46d51bc7-705b-43c8-8e89-0998c8896240":{"roots":{"references":[{"attributes":{"plot":{"id":"dcea865d-c255-4862-9b0f-bcc22134c6ad","type":"Plot"},"ticker":{"id":"d43da1db-a7d6-41ac-942e-44f9bfdc9d18","type":"BasicTicker"}},"id":"f5008906-ffb4-4a16-9a7f-ce1ccc3f0163","type":"Grid"},{"attributes":{},"id":"d43da1db-a7d6-41ac-942e-44f9bfdc9d18","type":"BasicTicker"},{"attributes":{"data_source":{"id":"3fe7491f-a314-4d94-8e09-cca2b16f82d4","type":"ColumnDataSource"},"glyph":{"id":"c1905711-6e24-471c-b0f1-979758f86dc9","type":"Oval"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"042b9fb2-90c6-4acf-9021-2ee8efb4938e","type":"GlyphRenderer"},{"attributes":{},"id":"14f98bc9-494c-4ba8-9169-4c6031b2af5f","type":"ToolEvents"},{"attributes":{"formatter":{"id":"d5f65074-e700-41ef-a27a-f5c58ecb5528","type":"BasicTickFormatter"},"plot":{"id":"dcea865d-c255-4862-9b0f-bcc22134c6ad","type":"Plot"},"ticker":{"id":"1ffb636e-6ad7-4d77-b982-7c18ff0541b6","type":"BasicTicker"}},"id":"6564b59f-ccfd-488c-97b6-e1cbd78ca932","type":"LinearAxis"},{"attributes":{"callback":null},"id":"72f9ee0f-baef-40f8-ba19-45175113bac8","type":"DataRange1d"},{"attributes":{},"id":"1ffb636e-6ad7-4d77-b982-7c18ff0541b6","type":"BasicTicker"},{"attributes":{},"id":"4649e36d-be03-4a8e-bd1e-152ca3cdc0d2","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1d91d0"},"height":{"units":"data","value":0.6},"width":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"c1905711-6e24-471c-b0f1-979758f86dc9","type":"Oval"},{"attributes":{"callback":null},"id":"c2d3423b-9852-4825-bfcb-d484b4ce25c5","type":"DataRange1d"},{"attributes":{},"id":"d5f65074-e700-41ef-a27a-f5c58ecb5528","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"38a9d788-03fb-4883-b9af-36129ef68c7c","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"6564b59f-ccfd-488c-97b6-e1cbd78ca932","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"042b9fb2-90c6-4acf-9021-2ee8efb4938e","type":"GlyphRenderer"},{"id":"38a9d788-03fb-4883-b9af-36129ef68c7c","type":"LinearAxis"},{"id":"6564b59f-ccfd-488c-97b6-e1cbd78ca932","type":"LinearAxis"},{"id":"f5008906-ffb4-4a16-9a7f-ce1ccc3f0163","type":"Grid"},{"id":"83a21d3d-ef9a-47de-8dcc-5277170159e1","type":"Grid"}],"title":null,"tool_events":{"id":"14f98bc9-494c-4ba8-9169-4c6031b2af5f","type":"ToolEvents"},"toolbar":{"id":"2992ab1c-eae0-462e-84a6-93389717a4d7","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c2d3423b-9852-4825-bfcb-d484b4ce25c5","type":"DataRange1d"},"y_range":{"id":"72f9ee0f-baef-40f8-ba19-45175113bac8","type":"DataRange1d"}},"id":"dcea865d-c255-4862-9b0f-bcc22134c6ad","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"3fe7491f-a314-4d94-8e09-cca2b16f82d4","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"4649e36d-be03-4a8e-bd1e-152ca3cdc0d2","type":"BasicTickFormatter"},"plot":{"id":"dcea865d-c255-4862-9b0f-bcc22134c6ad","type":"Plot"},"ticker":{"id":"d43da1db-a7d6-41ac-942e-44f9bfdc9d18","type":"BasicTicker"}},"id":"38a9d788-03fb-4883-b9af-36129ef68c7c","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"dcea865d-c255-4862-9b0f-bcc22134c6ad","type":"Plot"},"ticker":{"id":"1ffb636e-6ad7-4d77-b982-7c18ff0541b6","type":"BasicTicker"}},"id":"83a21d3d-ef9a-47de-8dcc-5277170159e1","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"2992ab1c-eae0-462e-84a6-93389717a4d7","type":"Toolbar"}],"root_ids":["dcea865d-c255-4862-9b0f-bcc22134c6ad"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"46d51bc7-705b-43c8-8e89-0998c8896240","elementid":"735d0773-9b47-4024-901d-bf547d72dd19","modelid":"dcea865d-c255-4862-9b0f-bcc22134c6ad"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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
});