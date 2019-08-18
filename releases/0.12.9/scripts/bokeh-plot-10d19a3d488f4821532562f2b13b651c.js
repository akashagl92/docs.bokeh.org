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
      };var element = document.getElementById("d337b734-bb97-4d2a-a0fd-3f62426bbfe7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd337b734-bb97-4d2a-a0fd-3f62426bbfe7' but no matching script tag was found. ")
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
                    var docs_json = {"7d72adbe-5748-4e81-8ce4-161644884b0e":{"roots":{"references":[{"attributes":{"children":[{"id":"2665a26c-cece-48d5-bd74-0c38bc4412e0","subtype":"Figure","type":"Plot"},{"id":"74fba08f-eb58-4250-9191-c0f660abf7c0","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"877bfedf-6b1d-463d-be48-efd0b10c7946","type":"Row"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"fa2def38-3115-4b22-8a84-6f8f80e741e7","type":"Segment"},{"attributes":{},"id":"454cb678-6c34-4b92-98ef-21fef2793d1c","type":"CategoricalTickFormatter"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"1f55cb60-1497-44e6-94f6-0a918a05a2a7","type":"Segment"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"0d70252c-599c-401e-8ca2-9b3242e6c037","type":"Circle"},{"attributes":{"formatter":{"id":"1a290a67-e360-44d4-b132-85722128427f","type":"CategoricalTickFormatter"},"plot":{"id":"74fba08f-eb58-4250-9191-c0f660abf7c0","subtype":"Figure","type":"Plot"},"ticker":{"id":"698f370f-5807-4d4e-9744-1e6c0a1852b0","type":"CategoricalTicker"}},"id":"37f4bfdb-5fd0-496e-9a21-11754c2d1ee9","type":"CategoricalAxis"},{"attributes":{"source":{"id":"db3e7a8b-ae59-42f1-8d68-4254789d88b9","type":"ColumnDataSource"}},"id":"ba42d6cb-58e0-486f-8147-a58e58c77771","type":"CDSView"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"5f1891e6-9943-40bc-a8eb-632049692d6b","type":"Rect"},{"attributes":{"source":{"id":"e1ea39c3-6b78-4af3-aaee-ba8919e39acf","type":"ColumnDataSource"}},"id":"8c7d1aa3-7eb1-41b6-a36c-1baa9c4dccd4","type":"CDSView"},{"attributes":{},"id":"05130cda-d17e-405c-ab4a-039f733f681c","type":"BasicTickFormatter"},{"attributes":{},"id":"1a290a67-e360-44d4-b132-85722128427f","type":"CategoricalTickFormatter"},{"attributes":{},"id":"b4d19d64-e25a-402d-8273-190e469004e0","type":"CategoricalScale"},{"attributes":{"below":[{"id":"cead31d3-5106-4563-b7b4-f4ee65e2215f","type":"CategoricalAxis"}],"left":[{"id":"3b2efb92-e49a-4b5f-ad48-fe883932d4df","type":"CategoricalAxis"}],"renderers":[{"id":"cead31d3-5106-4563-b7b4-f4ee65e2215f","type":"CategoricalAxis"},{"id":"828dc157-578d-40d8-bdef-1f16ed11112e","type":"Grid"},{"id":"3b2efb92-e49a-4b5f-ad48-fe883932d4df","type":"CategoricalAxis"},{"id":"d655c7d0-e575-4f78-87df-da17bfa50828","type":"Grid"},{"id":"28e7f2b4-9707-4a5d-a5f7-e22b8faf68ae","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"2d170ce8-b734-4026-8c56-2b40af69a0ab","type":"Title"},"toolbar":{"id":"59d8357d-d317-4d2e-be72-77ac5a994ffb","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"33ea7e1d-e57c-4a0c-abb4-fc3de7944e4b","type":"FactorRange"},"x_scale":{"id":"db212a7a-5975-46f5-87db-744658a2f859","type":"CategoricalScale"},"y_range":{"id":"b56aaf50-918d-48db-8045-32de554c459e","type":"FactorRange"},"y_scale":{"id":"b4d19d64-e25a-402d-8273-190e469004e0","type":"CategoricalScale"}},"id":"2665a26c-cece-48d5-bd74-0c38bc4412e0","subtype":"Figure","type":"Plot"},{"attributes":{"below":[{"id":"8173bf00-bb34-4e4b-957c-5eb8f4018c65","type":"LinearAxis"}],"left":[{"id":"37f4bfdb-5fd0-496e-9a21-11754c2d1ee9","type":"CategoricalAxis"}],"renderers":[{"id":"8173bf00-bb34-4e4b-957c-5eb8f4018c65","type":"LinearAxis"},{"id":"423abbe4-9a67-4b10-a87e-6cff9ab479e8","type":"Grid"},{"id":"37f4bfdb-5fd0-496e-9a21-11754c2d1ee9","type":"CategoricalAxis"},{"id":"499c863f-363f-4fc4-9e9c-d48ff3c1c774","type":"Grid"},{"id":"c51981a6-498d-4f18-8de1-b7451995846d","type":"GlyphRenderer"},{"id":"f2408f81-cd03-4d01-9cbd-aae62457df71","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"17b4549f-03a0-4e55-a9c2-d71396523f1c","type":"Title"},"toolbar":{"id":"53b42428-fac6-45b3-846d-ca24bf0f261a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4d98b3ba-72c1-4692-9f9f-27b17846851e","type":"Range1d"},"x_scale":{"id":"e7030a0e-6e79-4e0f-a65e-4f1500b2d536","type":"LinearScale"},"y_range":{"id":"6794a7e4-56b2-4998-a7b4-78880000e460","type":"FactorRange"},"y_scale":{"id":"197c2100-7f6b-4c68-950c-fb5d285c0bb2","type":"CategoricalScale"}},"id":"74fba08f-eb58-4250-9191-c0f660abf7c0","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"5d0b4f22-f78e-407f-8f9f-67c027bb9660","type":"ColumnDataSource"}},"id":"96266d06-ab5d-4d5a-9cdd-9f85de9be74f","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]}},"id":"db3e7a8b-ae59-42f1-8d68-4254789d88b9","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5d0b4f22-f78e-407f-8f9f-67c027bb9660","type":"ColumnDataSource"},"glyph":{"id":"5f1891e6-9943-40bc-a8eb-632049692d6b","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17bd418e-d536-4676-83a5-e372725a5380","type":"Rect"},"selection_glyph":null,"view":{"id":"96266d06-ab5d-4d5a-9cdd-9f85de9be74f","type":"CDSView"}},"id":"28e7f2b4-9707-4a5d-a5f7-e22b8faf68ae","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y0","x1","y1"],"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]}},"id":"e1ea39c3-6b78-4af3-aaee-ba8919e39acf","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"0a3ad89f-e89b-4ad3-a887-e62af253b074","type":"Circle"},{"attributes":{},"id":"bc4a193c-6e51-4c93-b722-b3fd124f60bc","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"b56aaf50-918d-48db-8045-32de554c459e","type":"FactorRange"},{"attributes":{"data_source":{"id":"db3e7a8b-ae59-42f1-8d68-4254789d88b9","type":"ColumnDataSource"},"glyph":{"id":"0d70252c-599c-401e-8ca2-9b3242e6c037","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0a3ad89f-e89b-4ad3-a887-e62af253b074","type":"Circle"},"selection_glyph":null,"view":{"id":"ba42d6cb-58e0-486f-8147-a58e58c77771","type":"CDSView"}},"id":"f2408f81-cd03-4d01-9cbd-aae62457df71","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"2d170ce8-b734-4026-8c56-2b40af69a0ab","type":"Title"},{"attributes":{},"id":"197c2100-7f6b-4c68-950c-fb5d285c0bb2","type":"CategoricalScale"},{"attributes":{"callback":null,"column_names":["x","y","fill_color","line_color"],"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo 123","foo 123","foo 123","bar:0.2","bar:0.2","bar:0.2","baz-10","baz-10","baz-10"],"y":["foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10"]}},"id":"5d0b4f22-f78e-407f-8f9f-67c027bb9660","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"454cb678-6c34-4b92-98ef-21fef2793d1c","type":"CategoricalTickFormatter"},"plot":{"id":"2665a26c-cece-48d5-bd74-0c38bc4412e0","subtype":"Figure","type":"Plot"},"ticker":{"id":"d1a9610d-c302-45f7-9ffe-2c6d95e2ad02","type":"CategoricalTicker"}},"id":"3b2efb92-e49a-4b5f-ad48-fe883932d4df","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"e1ea39c3-6b78-4af3-aaee-ba8919e39acf","type":"ColumnDataSource"},"glyph":{"id":"1f55cb60-1497-44e6-94f6-0a918a05a2a7","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fa2def38-3115-4b22-8a84-6f8f80e741e7","type":"Segment"},"selection_glyph":null,"view":{"id":"8c7d1aa3-7eb1-41b6-a36c-1baa9c4dccd4","type":"CDSView"}},"id":"c51981a6-498d-4f18-8de1-b7451995846d","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"2665a26c-cece-48d5-bd74-0c38bc4412e0","subtype":"Figure","type":"Plot"},"ticker":{"id":"d1a9610d-c302-45f7-9ffe-2c6d95e2ad02","type":"CategoricalTicker"}},"id":"d655c7d0-e575-4f78-87df-da17bfa50828","type":"Grid"},{"attributes":{"plot":null,"text":"Categorical Dot Plot"},"id":"17b4549f-03a0-4e55-a9c2-d71396523f1c","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"56b23a99-7952-4480-9466-02641f7c1fad","type":"HoverTool"}]},"id":"59d8357d-d317-4d2e-be72-77ac5a994ffb","type":"Toolbar"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"6794a7e4-56b2-4998-a7b4-78880000e460","type":"FactorRange"},{"attributes":{},"id":"e7030a0e-6e79-4e0f-a65e-4f1500b2d536","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"17bd418e-d536-4676-83a5-e372725a5380","type":"Rect"},{"attributes":{},"id":"d1a9610d-c302-45f7-9ffe-2c6d95e2ad02","type":"CategoricalTicker"},{"attributes":{"callback":null,"end":100},"id":"4d98b3ba-72c1-4692-9f9f-27b17846851e","type":"Range1d"},{"attributes":{},"id":"db212a7a-5975-46f5-87db-744658a2f859","type":"CategoricalScale"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"33ea7e1d-e57c-4a0c-abb4-fc3de7944e4b","type":"FactorRange"},{"attributes":{},"id":"edc119a7-3588-4cfe-95eb-e129b6e50541","type":"BasicTicker"},{"attributes":{"plot":{"id":"2665a26c-cece-48d5-bd74-0c38bc4412e0","subtype":"Figure","type":"Plot"},"ticker":{"id":"38ad4452-7479-405b-90d4-37dae14c0ff9","type":"CategoricalTicker"}},"id":"828dc157-578d-40d8-bdef-1f16ed11112e","type":"Grid"},{"attributes":{"plot":{"id":"74fba08f-eb58-4250-9191-c0f660abf7c0","subtype":"Figure","type":"Plot"},"ticker":{"id":"edc119a7-3588-4cfe-95eb-e129b6e50541","type":"BasicTicker"}},"id":"423abbe4-9a67-4b10-a87e-6cff9ab479e8","type":"Grid"},{"attributes":{},"id":"38ad4452-7479-405b-90d4-37dae14c0ff9","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"bc4a193c-6e51-4c93-b722-b3fd124f60bc","type":"CategoricalTickFormatter"},"plot":{"id":"2665a26c-cece-48d5-bd74-0c38bc4412e0","subtype":"Figure","type":"Plot"},"ticker":{"id":"38ad4452-7479-405b-90d4-37dae14c0ff9","type":"CategoricalTicker"}},"id":"cead31d3-5106-4563-b7b4-f4ee65e2215f","type":"CategoricalAxis"},{"attributes":{},"id":"698f370f-5807-4d4e-9744-1e6c0a1852b0","type":"CategoricalTicker"},{"attributes":{"callback":null},"id":"56b23a99-7952-4480-9466-02641f7c1fad","type":"HoverTool"},{"attributes":{"dimension":1,"plot":{"id":"74fba08f-eb58-4250-9191-c0f660abf7c0","subtype":"Figure","type":"Plot"},"ticker":{"id":"698f370f-5807-4d4e-9744-1e6c0a1852b0","type":"CategoricalTicker"}},"id":"499c863f-363f-4fc4-9e9c-d48ff3c1c774","type":"Grid"},{"attributes":{"formatter":{"id":"05130cda-d17e-405c-ab4a-039f733f681c","type":"BasicTickFormatter"},"plot":{"id":"74fba08f-eb58-4250-9191-c0f660abf7c0","subtype":"Figure","type":"Plot"},"ticker":{"id":"edc119a7-3588-4cfe-95eb-e129b6e50541","type":"BasicTicker"}},"id":"8173bf00-bb34-4e4b-957c-5eb8f4018c65","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"53b42428-fac6-45b3-846d-ca24bf0f261a","type":"Toolbar"}],"root_ids":["877bfedf-6b1d-463d-be48-efd0b10c7946"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"7d72adbe-5748-4e81-8ce4-161644884b0e","elementid":"d337b734-bb97-4d2a-a0fd-3f62426bbfe7","modelid":"877bfedf-6b1d-463d-be48-efd0b10c7946"}];
                
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
