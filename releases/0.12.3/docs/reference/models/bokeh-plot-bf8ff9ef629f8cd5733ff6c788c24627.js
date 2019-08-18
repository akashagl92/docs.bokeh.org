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
      };var element = document.getElementById("36ad074f-8949-42a7-9b55-7580c0044433");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '36ad074f-8949-42a7-9b55-7580c0044433' but no matching script tag was found. ")
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
                  var docs_json = {"4086019b-b004-46f9-8696-4d95123f4fe4":{"roots":{"references":[{"attributes":{"plot":{"id":"25ab6fce-580d-4d0a-b028-ad7cf1940d6e","type":"Plot"},"ticker":{"id":"e4697ded-6ea1-47e1-89a4-a52f6a9f3ec9","type":"BasicTicker"}},"id":"9eff5bf7-5bf7-4750-996c-608b78bc80b8","type":"Grid"},{"attributes":{},"id":"e4697ded-6ea1-47e1-89a4-a52f6a9f3ec9","type":"BasicTicker"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"255ab4fe-e1fc-4b17-a857-891a6e24ea7c","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"25ab6fce-580d-4d0a-b028-ad7cf1940d6e","type":"Plot"},"ticker":{"id":"69cc4c8e-d5a0-48d1-acb0-b03349c12006","type":"BasicTicker"}},"id":"ac59d8db-cb71-438d-9163-862b69f2bae8","type":"Grid"},{"attributes":{"callback":null,"column_names":["x2","y1","h1","w1","url","x1","y2"],"data":{"h1":[10.0,20.0,30.0,40.0,50.0],"url":["http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png"],"w1":[10.0,20.0,30.0,40.0,50.0],"x1":[0.0,37.5,75.0,112.5,150.0],"x2":[-50.0,0.0,50.0,100.0,150.0],"y1":[0.0,37.5,75.0,112.5,150.0],"y2":[0.0,50.0,100.0,150.0,200.0]}},"id":"161ea500-9a03-44de-9480-91d32d576023","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"338490e8-d501-4845-bd67-de7644260046","type":"BasicTickFormatter"},"plot":{"id":"25ab6fce-580d-4d0a-b028-ad7cf1940d6e","type":"Plot"},"ticker":{"id":"e4697ded-6ea1-47e1-89a4-a52f6a9f3ec9","type":"BasicTicker"}},"id":"a54120e9-cba7-4af6-9d03-11b032e90399","type":"LinearAxis"},{"attributes":{"below":[{"id":"a54120e9-cba7-4af6-9d03-11b032e90399","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"def96380-34f0-4615-ab42-5ade0f604246","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"eb095838-440b-4fc5-a12c-4e3cd119c252","type":"GlyphRenderer"},{"id":"c006e9f8-0586-46d3-99af-c5177ad89df2","type":"GlyphRenderer"},{"id":"3bb64dac-94ac-458d-8f43-55fa95abfa4a","type":"GlyphRenderer"},{"id":"a54120e9-cba7-4af6-9d03-11b032e90399","type":"LinearAxis"},{"id":"def96380-34f0-4615-ab42-5ade0f604246","type":"LinearAxis"},{"id":"9eff5bf7-5bf7-4750-996c-608b78bc80b8","type":"Grid"},{"id":"ac59d8db-cb71-438d-9163-862b69f2bae8","type":"Grid"}],"title":null,"tool_events":{"id":"c7fab49d-d8ee-4b8f-9daf-2a329ce7cd66","type":"ToolEvents"},"toolbar":{"id":"ae90ba95-6ea1-44b4-a0a7-0c1a553ad84e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5f22d3d2-5824-4daf-a581-555ae7601ae9","type":"Range1d"},"y_range":{"id":"255ab4fe-e1fc-4b17-a857-891a6e24ea7c","type":"Range1d"}},"id":"25ab6fce-580d-4d0a-b028-ad7cf1940d6e","type":"Plot"},{"attributes":{"h":{"units":"data","value":20},"url":{"field":"url"},"w":{"units":"data","value":20},"x":{"field":"x2"},"y":{"field":"y2"}},"id":"89bb2afa-7ac3-4340-baf4-90bafb189204","type":"ImageURL"},{"attributes":{},"id":"3201dba1-9974-438d-8cac-83844f17a139","type":"BasicTickFormatter"},{"attributes":{},"id":"69cc4c8e-d5a0-48d1-acb0-b03349c12006","type":"BasicTicker"},{"attributes":{"data_source":{"id":"161ea500-9a03-44de-9480-91d32d576023","type":"ColumnDataSource"},"glyph":{"id":"4fe04bea-6b79-4451-b22b-6ef23b4462e8","type":"ImageURL"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3bb64dac-94ac-458d-8f43-55fa95abfa4a","type":"GlyphRenderer"},{"attributes":{},"id":"c7fab49d-d8ee-4b8f-9daf-2a329ce7cd66","type":"ToolEvents"},{"attributes":{"formatter":{"id":"3201dba1-9974-438d-8cac-83844f17a139","type":"BasicTickFormatter"},"plot":{"id":"25ab6fce-580d-4d0a-b028-ad7cf1940d6e","type":"Plot"},"ticker":{"id":"69cc4c8e-d5a0-48d1-acb0-b03349c12006","type":"BasicTicker"}},"id":"def96380-34f0-4615-ab42-5ade0f604246","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"ae90ba95-6ea1-44b4-a0a7-0c1a553ad84e","type":"Toolbar"},{"attributes":{"anchor":"center","h":{"field":"h1","units":"data"},"url":{"field":"url"},"w":{"field":"w1","units":"data"},"x":{"field":"x1"},"y":{"field":"y1"}},"id":"b1bd7d1d-539c-4723-8dcd-68b9d43a6600","type":"ImageURL"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"5f22d3d2-5824-4daf-a581-555ae7601ae9","type":"Range1d"},{"attributes":{},"id":"338490e8-d501-4845-bd67-de7644260046","type":"BasicTickFormatter"},{"attributes":{"anchor":"bottom_right","url":{"value":"http://bokeh.pydata.org/en/latest/_static/images/logo.png"},"x":{"value":200},"y":{"value":-100}},"id":"4fe04bea-6b79-4451-b22b-6ef23b4462e8","type":"ImageURL"},{"attributes":{"data_source":{"id":"161ea500-9a03-44de-9480-91d32d576023","type":"ColumnDataSource"},"glyph":{"id":"89bb2afa-7ac3-4340-baf4-90bafb189204","type":"ImageURL"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c006e9f8-0586-46d3-99af-c5177ad89df2","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"161ea500-9a03-44de-9480-91d32d576023","type":"ColumnDataSource"},"glyph":{"id":"b1bd7d1d-539c-4723-8dcd-68b9d43a6600","type":"ImageURL"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"eb095838-440b-4fc5-a12c-4e3cd119c252","type":"GlyphRenderer"}],"root_ids":["25ab6fce-580d-4d0a-b028-ad7cf1940d6e"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"4086019b-b004-46f9-8696-4d95123f4fe4","elementid":"36ad074f-8949-42a7-9b55-7580c0044433","modelid":"25ab6fce-580d-4d0a-b028-ad7cf1940d6e"}];
                  
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