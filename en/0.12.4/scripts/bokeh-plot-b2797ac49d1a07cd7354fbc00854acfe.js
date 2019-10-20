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
      };var element = document.getElementById("f1eb866c-5662-4614-94d6-3193102d9ef1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f1eb866c-5662-4614-94d6-3193102d9ef1' but no matching script tag was found. ")
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
                var docs_json = {"4ddbffea-d749-4810-ae33-b4e50779528d":{"roots":{"references":[{"attributes":{"url":"http://www.colors.commutercreative.com/@color/"},"id":"4f747b75-3acb-42f9-b1b2-3536a1e2210a","type":"OpenURL"},{"attributes":{"callback":null},"id":"dd3d5e58-46f9-4cb5-a497-37197018aef4","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"33364f49-0564-4c54-a122-6508c90231b0","type":"Circle"},{"attributes":{},"id":"38efd837-e349-48f1-bcbf-05b655612669","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"ab38d17d-73e6-43f4-98ee-a09d9bc0d6d9","type":"Circle"},{"attributes":{"formatter":{"id":"53c6f4dc-64f0-4a43-954a-6e59eb7b2a7a","type":"BasicTickFormatter"},"plot":{"id":"27ad217c-3a6a-49bc-b8a0-38b70c3528a8","subtype":"Figure","type":"Plot"},"ticker":{"id":"353cf4e5-026e-499b-8a61-01175ca0fbb0","type":"BasicTicker"}},"id":"09f395d7-1386-4a82-bbc6-ab0fb69f9e7d","type":"LinearAxis"},{"attributes":{"callback":null},"id":"78f90686-6aa8-466e-a550-3c27dc0d0d3f","type":"DataRange1d"},{"attributes":{"plot":{"id":"27ad217c-3a6a-49bc-b8a0-38b70c3528a8","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d5d1ae3-bf3c-4803-851e-b5eff00b2c78","type":"BasicTicker"}},"id":"b14b9004-1cca-4fad-be9c-e53bfd3b42bd","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"11dc9477-f02b-4841-b27d-23470037a779","type":"TapTool"}]},"id":"a12e2099-eb92-45c6-b5bd-d2f9eb8505cf","type":"Toolbar"},{"attributes":{"plot":null,"text":"Click the Dots"},"id":"9701b789-2c80-4aa4-b483-63011c37c2f5","type":"Title"},{"attributes":{},"id":"6d5d1ae3-bf3c-4803-851e-b5eff00b2c78","type":"BasicTicker"},{"attributes":{"data_source":{"id":"c7e15d9c-96b3-4cf8-a24e-a362f49a10ce","type":"ColumnDataSource"},"glyph":{"id":"ab38d17d-73e6-43f4-98ee-a09d9bc0d6d9","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"33364f49-0564-4c54-a122-6508c90231b0","type":"Circle"},"selection_glyph":null},"id":"249eb5a3-e443-4353-91fc-83b019479e6f","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"38efd837-e349-48f1-bcbf-05b655612669","type":"BasicTickFormatter"},"plot":{"id":"27ad217c-3a6a-49bc-b8a0-38b70c3528a8","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d5d1ae3-bf3c-4803-851e-b5eff00b2c78","type":"BasicTicker"}},"id":"76690366-0a33-4b54-add6-edb40021a111","type":"LinearAxis"},{"attributes":{},"id":"353cf4e5-026e-499b-8a61-01175ca0fbb0","type":"BasicTicker"},{"attributes":{},"id":"c5ec19c8-8119-4621-ac0f-ec9bc1be0057","type":"ToolEvents"},{"attributes":{"callback":{"id":"4f747b75-3acb-42f9-b1b2-3536a1e2210a","type":"OpenURL"},"plot":{"id":"27ad217c-3a6a-49bc-b8a0-38b70c3528a8","subtype":"Figure","type":"Plot"}},"id":"11dc9477-f02b-4841-b27d-23470037a779","type":"TapTool"},{"attributes":{"below":[{"id":"76690366-0a33-4b54-add6-edb40021a111","type":"LinearAxis"}],"left":[{"id":"09f395d7-1386-4a82-bbc6-ab0fb69f9e7d","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"76690366-0a33-4b54-add6-edb40021a111","type":"LinearAxis"},{"id":"b14b9004-1cca-4fad-be9c-e53bfd3b42bd","type":"Grid"},{"id":"09f395d7-1386-4a82-bbc6-ab0fb69f9e7d","type":"LinearAxis"},{"id":"b9d6d386-f9b4-4224-93c5-c7eb665c735b","type":"Grid"},{"id":"249eb5a3-e443-4353-91fc-83b019479e6f","type":"GlyphRenderer"}],"title":{"id":"9701b789-2c80-4aa4-b483-63011c37c2f5","type":"Title"},"tool_events":{"id":"c5ec19c8-8119-4621-ac0f-ec9bc1be0057","type":"ToolEvents"},"toolbar":{"id":"a12e2099-eb92-45c6-b5bd-d2f9eb8505cf","type":"Toolbar"},"x_range":{"id":"dd3d5e58-46f9-4cb5-a497-37197018aef4","type":"DataRange1d"},"y_range":{"id":"78f90686-6aa8-466e-a550-3c27dc0d0d3f","type":"DataRange1d"}},"id":"27ad217c-3a6a-49bc-b8a0-38b70c3528a8","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","color","y"],"data":{"color":["navy","orange","olive","firebrick","gold"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"c7e15d9c-96b3-4cf8-a24e-a362f49a10ce","type":"ColumnDataSource"},{"attributes":{},"id":"53c6f4dc-64f0-4a43-954a-6e59eb7b2a7a","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"27ad217c-3a6a-49bc-b8a0-38b70c3528a8","subtype":"Figure","type":"Plot"},"ticker":{"id":"353cf4e5-026e-499b-8a61-01175ca0fbb0","type":"BasicTicker"}},"id":"b9d6d386-f9b4-4224-93c5-c7eb665c735b","type":"Grid"}],"root_ids":["27ad217c-3a6a-49bc-b8a0-38b70c3528a8"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"4ddbffea-d749-4810-ae33-b4e50779528d","elementid":"f1eb866c-5662-4614-94d6-3193102d9ef1","modelid":"27ad217c-3a6a-49bc-b8a0-38b70c3528a8"}];
                
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
