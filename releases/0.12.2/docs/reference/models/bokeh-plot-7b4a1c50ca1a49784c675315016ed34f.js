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
      };var element = document.getElementById("af74bb9f-8bb8-4ddf-8b34-4aa0ce43e550");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'af74bb9f-8bb8-4ddf-8b34-4aa0ce43e550' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"16ce20e4-61ce-4aa3-a131-2bf4c1b034d3":{"roots":{"references":[{"attributes":{"formatter":{"id":"4fc6bf58-2516-4529-9aef-656694de8468","type":"BasicTickFormatter"},"plot":{"id":"a4ffd55c-3b76-4887-b078-ecd6cfa9f724","type":"Plot"},"ticker":{"id":"3e80e172-68db-40f4-9b28-23963f67b82f","type":"BasicTicker"}},"id":"52d89a9b-270c-44b2-9264-e48b74f0f315","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"a40f163e-0675-49bd-a899-778cb6410255","type":"Toolbar"},{"attributes":{},"id":"4fc6bf58-2516-4529-9aef-656694de8468","type":"BasicTickFormatter"},{"attributes":{},"id":"3b47c5be-6a86-4fd4-807b-e6d230e3a42e","type":"BasicTicker"},{"attributes":{"plot":{"id":"a4ffd55c-3b76-4887-b078-ecd6cfa9f724","type":"Plot"},"ticker":{"id":"3e80e172-68db-40f4-9b28-23963f67b82f","type":"BasicTicker"}},"id":"2ed0948c-09c6-4a52-99bc-061f04a515bb","type":"Grid"},{"attributes":{"callback":null},"id":"2c618045-3e4a-4fdd-8140-33df6a0ae89e","type":"DataRange1d"},{"attributes":{"below":[{"id":"52d89a9b-270c-44b2-9264-e48b74f0f315","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"5092e406-b3c4-48a6-8d95-2aa236f36981","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"19252d1c-49e8-40f0-aa66-8c04610617f2","type":"GlyphRenderer"},{"id":"52d89a9b-270c-44b2-9264-e48b74f0f315","type":"LinearAxis"},{"id":"5092e406-b3c4-48a6-8d95-2aa236f36981","type":"LinearAxis"},{"id":"2ed0948c-09c6-4a52-99bc-061f04a515bb","type":"Grid"},{"id":"e9aa336d-f957-44a3-9884-fd5c3539d217","type":"Grid"}],"title":null,"tool_events":{"id":"4fc9c25f-037d-4555-a622-afa233a7dfd1","type":"ToolEvents"},"toolbar":{"id":"a40f163e-0675-49bd-a899-778cb6410255","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2c618045-3e4a-4fdd-8140-33df6a0ae89e","type":"DataRange1d"},"y_range":{"id":"d9a1c41f-a3e5-4da1-af97-2f6e9aabeed4","type":"DataRange1d"}},"id":"a4ffd55c-3b76-4887-b078-ecd6cfa9f724","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"a4ffd55c-3b76-4887-b078-ecd6cfa9f724","type":"Plot"},"ticker":{"id":"3b47c5be-6a86-4fd4-807b-e6d230e3a42e","type":"BasicTicker"}},"id":"e9aa336d-f957-44a3-9884-fd5c3539d217","type":"Grid"},{"attributes":{},"id":"4fc9c25f-037d-4555-a622-afa233a7dfd1","type":"ToolEvents"},{"attributes":{},"id":"d9a25b4a-0747-402a-9054-ba5fb8c78212","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"d9a1c41f-a3e5-4da1-af97-2f6e9aabeed4","type":"DataRange1d"},{"attributes":{},"id":"3e80e172-68db-40f4-9b28-23963f67b82f","type":"BasicTicker"},{"attributes":{"data_source":{"id":"7ae0b2f4-a793-425b-9d6b-16d62fe7e2ca","type":"ColumnDataSource"},"glyph":{"id":"4fa3d80d-d90f-440b-813c-2bddbc1671ae","type":"Oval"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"19252d1c-49e8-40f0-aa66-8c04610617f2","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"d9a25b4a-0747-402a-9054-ba5fb8c78212","type":"BasicTickFormatter"},"plot":{"id":"a4ffd55c-3b76-4887-b078-ecd6cfa9f724","type":"Plot"},"ticker":{"id":"3b47c5be-6a86-4fd4-807b-e6d230e3a42e","type":"BasicTicker"}},"id":"5092e406-b3c4-48a6-8d95-2aa236f36981","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1d91d0"},"height":{"units":"data","value":0.6},"width":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"4fa3d80d-d90f-440b-813c-2bddbc1671ae","type":"Oval"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"7ae0b2f4-a793-425b-9d6b-16d62fe7e2ca","type":"ColumnDataSource"}],"root_ids":["a4ffd55c-3b76-4887-b078-ecd6cfa9f724"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"16ce20e4-61ce-4aa3-a131-2bf4c1b034d3","elementid":"af74bb9f-8bb8-4ddf-8b34-4aa0ce43e550","modelid":"a4ffd55c-3b76-4887-b078-ecd6cfa9f724"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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