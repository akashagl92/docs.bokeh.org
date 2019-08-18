document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("9e99144e-c353-40a0-b9c1-38a4933da305");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9e99144e-c353-40a0-b9c1-38a4933da305' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"838e94ab-3cdd-48f9-af28-d6e7212c5b0b":{"roots":{"references":[{"attributes":{"formatter":{"id":"73a8f640-88b6-4f82-ab0e-61b55aad69d6","type":"BasicTickFormatter"},"plot":{"id":"dda17ac1-d1a0-40e6-8beb-42dd88cd593d","type":"Plot"},"ticker":{"id":"49003580-1c77-44c9-ba01-599984ab76a5","type":"BasicTicker"}},"id":"edeb7211-1807-4fed-967d-ca5164ed156c","type":"LinearAxis"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#1c9099"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"bfa23379-f152-4fa3-9154-a8ad392778e8","type":"Diamond"},{"attributes":{},"id":"bf45d5e4-a5fc-45f2-9c78-300ac835a446","type":"BasicTicker"},{"attributes":{"below":[{"id":"edeb7211-1807-4fed-967d-ca5164ed156c","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"2d2248bc-0ac5-446d-9cd2-1799d0badb5b","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"821770ea-83d2-4e01-bccc-c4173f62a42e","type":"GlyphRenderer"},{"id":"edeb7211-1807-4fed-967d-ca5164ed156c","type":"LinearAxis"},{"id":"2d2248bc-0ac5-446d-9cd2-1799d0badb5b","type":"LinearAxis"},{"id":"f1388571-45f5-45ad-8811-fd83452c72af","type":"Grid"},{"id":"1a011ac4-92cc-4d94-a5ef-04dd87e967c9","type":"Grid"}],"title":null,"tool_events":{"id":"b1224979-b53f-4319-8b8e-eaa1fd7209d5","type":"ToolEvents"},"toolbar":{"id":"bd971f53-8fb4-4b44-89e3-1147dc9d6026","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"886c4460-5a03-4179-9c4a-895fd5144c8a","type":"DataRange1d"},"y_range":{"id":"81412926-8956-4f96-8e51-c0ae7c918218","type":"DataRange1d"}},"id":"dda17ac1-d1a0-40e6-8beb-42dd88cd593d","type":"Plot"},{"attributes":{"data_source":{"id":"f37787c7-5be2-464c-b2bc-0809606e45cb","type":"ColumnDataSource"},"glyph":{"id":"bfa23379-f152-4fa3-9154-a8ad392778e8","type":"Diamond"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"821770ea-83d2-4e01-bccc-c4173f62a42e","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"dda17ac1-d1a0-40e6-8beb-42dd88cd593d","type":"Plot"},"ticker":{"id":"49003580-1c77-44c9-ba01-599984ab76a5","type":"BasicTicker"}},"id":"f1388571-45f5-45ad-8811-fd83452c72af","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"bd971f53-8fb4-4b44-89e3-1147dc9d6026","type":"Toolbar"},{"attributes":{},"id":"73a8f640-88b6-4f82-ab0e-61b55aad69d6","type":"BasicTickFormatter"},{"attributes":{},"id":"3042023a-3d5c-47df-9cd6-ecc7385e521d","type":"BasicTickFormatter"},{"attributes":{},"id":"b1224979-b53f-4319-8b8e-eaa1fd7209d5","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"f37787c7-5be2-464c-b2bc-0809606e45cb","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"81412926-8956-4f96-8e51-c0ae7c918218","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"dda17ac1-d1a0-40e6-8beb-42dd88cd593d","type":"Plot"},"ticker":{"id":"bf45d5e4-a5fc-45f2-9c78-300ac835a446","type":"BasicTicker"}},"id":"1a011ac4-92cc-4d94-a5ef-04dd87e967c9","type":"Grid"},{"attributes":{"formatter":{"id":"3042023a-3d5c-47df-9cd6-ecc7385e521d","type":"BasicTickFormatter"},"plot":{"id":"dda17ac1-d1a0-40e6-8beb-42dd88cd593d","type":"Plot"},"ticker":{"id":"bf45d5e4-a5fc-45f2-9c78-300ac835a446","type":"BasicTicker"}},"id":"2d2248bc-0ac5-446d-9cd2-1799d0badb5b","type":"LinearAxis"},{"attributes":{},"id":"49003580-1c77-44c9-ba01-599984ab76a5","type":"BasicTicker"},{"attributes":{"callback":null},"id":"886c4460-5a03-4179-9c4a-895fd5144c8a","type":"DataRange1d"}],"root_ids":["dda17ac1-d1a0-40e6-8beb-42dd88cd593d"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"838e94ab-3cdd-48f9-af28-d6e7212c5b0b","elementid":"9e99144e-c353-40a0-b9c1-38a4933da305","modelid":"dda17ac1-d1a0-40e6-8beb-42dd88cd593d"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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