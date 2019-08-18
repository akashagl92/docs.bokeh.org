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
      };var element = document.getElementById("0f0cd8ef-220d-4d2a-9936-da6ff13a6d68");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0f0cd8ef-220d-4d2a-9936-da6ff13a6d68' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"d951d6a4-7acf-4b35-9e21-33caa4e4e85f":{"roots":{"references":[{"attributes":{"callback":null},"id":"f9a903d9-8a71-4510-9e2a-17f2d59f94ed","type":"DataRange1d"},{"attributes":{"data_source":{"id":"4cf6d20c-4ed5-47be-89b1-59e34cb6ca18","type":"ColumnDataSource"},"glyph":{"id":"c686011f-a3f7-4611-bc3d-449dcff32351","type":"Diamond"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ef4ad5b6-4a3a-4e13-b35a-b24e2a061787","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"bde83c7f-224d-4eff-bcee-236db04f7a8d","type":"BasicTickFormatter"},"plot":{"id":"fee0a94f-5093-42fb-8d00-1894b6d654ef","type":"Plot"},"ticker":{"id":"0a6a4a4b-7344-43d2-b7c0-8df8dfbad119","type":"BasicTicker"}},"id":"ee7f5e1f-ba02-4969-ac3f-cd536932ecad","type":"LinearAxis"},{"attributes":{},"id":"5543c11f-ff98-4307-b515-2343b4714a91","type":"BasicTickFormatter"},{"attributes":{},"id":"0a6a4a4b-7344-43d2-b7c0-8df8dfbad119","type":"BasicTicker"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#1c9099"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c686011f-a3f7-4611-bc3d-449dcff32351","type":"Diamond"},{"attributes":{"dimension":1,"plot":{"id":"fee0a94f-5093-42fb-8d00-1894b6d654ef","type":"Plot"},"ticker":{"id":"0a6a4a4b-7344-43d2-b7c0-8df8dfbad119","type":"BasicTicker"}},"id":"1ae238dd-563c-4015-873e-a6b7231f8543","type":"Grid"},{"attributes":{"below":[{"id":"14ea1f9b-6dd1-430c-9ffb-0cbbe77658a3","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"ee7f5e1f-ba02-4969-ac3f-cd536932ecad","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"ef4ad5b6-4a3a-4e13-b35a-b24e2a061787","type":"GlyphRenderer"},{"id":"14ea1f9b-6dd1-430c-9ffb-0cbbe77658a3","type":"LinearAxis"},{"id":"ee7f5e1f-ba02-4969-ac3f-cd536932ecad","type":"LinearAxis"},{"id":"6f71ff26-32f4-4be3-b437-dfc8d2174623","type":"Grid"},{"id":"1ae238dd-563c-4015-873e-a6b7231f8543","type":"Grid"}],"title":null,"tool_events":{"id":"26d806b9-c4f9-4f27-b815-1dfecabae4c1","type":"ToolEvents"},"toolbar":{"id":"20722784-6a1f-4de1-9ed0-e3f92577dca1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f9a903d9-8a71-4510-9e2a-17f2d59f94ed","type":"DataRange1d"},"y_range":{"id":"211cdd9d-6576-4ba9-a204-9ea15ea64557","type":"DataRange1d"}},"id":"fee0a94f-5093-42fb-8d00-1894b6d654ef","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"4cf6d20c-4ed5-47be-89b1-59e34cb6ca18","type":"ColumnDataSource"},{"attributes":{},"id":"bde83c7f-224d-4eff-bcee-236db04f7a8d","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"5543c11f-ff98-4307-b515-2343b4714a91","type":"BasicTickFormatter"},"plot":{"id":"fee0a94f-5093-42fb-8d00-1894b6d654ef","type":"Plot"},"ticker":{"id":"dae87f14-5e27-404a-be74-6715f0127d10","type":"BasicTicker"}},"id":"14ea1f9b-6dd1-430c-9ffb-0cbbe77658a3","type":"LinearAxis"},{"attributes":{},"id":"dae87f14-5e27-404a-be74-6715f0127d10","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"20722784-6a1f-4de1-9ed0-e3f92577dca1","type":"Toolbar"},{"attributes":{},"id":"26d806b9-c4f9-4f27-b815-1dfecabae4c1","type":"ToolEvents"},{"attributes":{"plot":{"id":"fee0a94f-5093-42fb-8d00-1894b6d654ef","type":"Plot"},"ticker":{"id":"dae87f14-5e27-404a-be74-6715f0127d10","type":"BasicTicker"}},"id":"6f71ff26-32f4-4be3-b437-dfc8d2174623","type":"Grid"},{"attributes":{"callback":null},"id":"211cdd9d-6576-4ba9-a204-9ea15ea64557","type":"DataRange1d"}],"root_ids":["fee0a94f-5093-42fb-8d00-1894b6d654ef"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"d951d6a4-7acf-4b35-9e21-33caa4e4e85f","elementid":"0f0cd8ef-220d-4d2a-9936-da6ff13a6d68","modelid":"fee0a94f-5093-42fb-8d00-1894b6d654ef"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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