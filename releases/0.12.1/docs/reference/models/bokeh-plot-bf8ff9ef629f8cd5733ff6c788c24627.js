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
      };var element = document.getElementById("07dd7e13-d8d5-415e-8196-f0f137892c65");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '07dd7e13-d8d5-415e-8196-f0f137892c65' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"9ad68dcc-acff-48e7-be27-202915469f81":{"roots":{"references":[{"attributes":{},"id":"a821ff02-f831-4047-b1c1-64cef20b9702","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"61587374-a606-4b34-9234-fe5d14e1bf68","type":"Plot"},"ticker":{"id":"b4b79fc8-ee05-46ba-bccc-16845cf1aa0a","type":"BasicTicker"}},"id":"53c8e7ca-4b80-489e-9d75-7c41b07f61f2","type":"Grid"},{"attributes":{"callback":null,"column_names":["x2","y1","h1","w1","url","x1","y2"],"data":{"h1":[10.0,20.0,30.0,40.0,50.0],"url":["http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png"],"w1":[10.0,20.0,30.0,40.0,50.0],"x1":[0.0,37.5,75.0,112.5,150.0],"x2":[-50.0,0.0,50.0,100.0,150.0],"y1":[0.0,37.5,75.0,112.5,150.0],"y2":[0.0,50.0,100.0,150.0,200.0]}},"id":"1b131b2a-5d12-4771-8764-4deab0f19684","type":"ColumnDataSource"},{"attributes":{},"id":"bb8324bb-7d76-4522-b372-804141319345","type":"BasicTicker"},{"attributes":{"below":[{"id":"2dff4d23-600d-4110-9fb3-d028b82df127","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"e8107ec7-b869-4e29-a3b4-6d639d04d624","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"932be72e-a9ed-4844-9b2a-3eb62bed3a96","type":"GlyphRenderer"},{"id":"416aef5d-4bae-43e8-8d04-c0b67735f7af","type":"GlyphRenderer"},{"id":"213f8607-b4b1-42f8-b29a-8ebfbf5c5535","type":"GlyphRenderer"},{"id":"2dff4d23-600d-4110-9fb3-d028b82df127","type":"LinearAxis"},{"id":"e8107ec7-b869-4e29-a3b4-6d639d04d624","type":"LinearAxis"},{"id":"7e4f99df-52a8-4faa-a5b0-7d047a974ad6","type":"Grid"},{"id":"53c8e7ca-4b80-489e-9d75-7c41b07f61f2","type":"Grid"}],"title":null,"tool_events":{"id":"73894e6a-a0c3-43d3-96d3-7efd7b32f16e","type":"ToolEvents"},"toolbar":{"id":"380fb4cd-6f90-4201-8687-4f5c8e3fee6d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9863aceb-d547-44e0-93ca-ca898e0371bb","type":"Range1d"},"y_range":{"id":"5a960ad5-e478-4ac6-b12a-efd718b3aa71","type":"Range1d"}},"id":"61587374-a606-4b34-9234-fe5d14e1bf68","type":"Plot"},{"attributes":{"data_source":{"id":"1b131b2a-5d12-4771-8764-4deab0f19684","type":"ColumnDataSource"},"glyph":{"id":"15813d44-6fb4-46b9-9a83-f9a0a5aefd8a","type":"ImageURL"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"213f8607-b4b1-42f8-b29a-8ebfbf5c5535","type":"GlyphRenderer"},{"attributes":{"h":{"units":"data","value":20},"url":{"field":"url"},"w":{"units":"data","value":20},"x":{"field":"x2"},"y":{"field":"y2"}},"id":"33c11608-4fd2-4503-bb48-64881f7cfe40","type":"ImageURL"},{"attributes":{},"id":"b4b79fc8-ee05-46ba-bccc-16845cf1aa0a","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1b131b2a-5d12-4771-8764-4deab0f19684","type":"ColumnDataSource"},"glyph":{"id":"33c11608-4fd2-4503-bb48-64881f7cfe40","type":"ImageURL"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"416aef5d-4bae-43e8-8d04-c0b67735f7af","type":"GlyphRenderer"},{"attributes":{"anchor":"center","h":{"field":"h1","units":"data"},"url":{"field":"url"},"w":{"field":"w1","units":"data"},"x":{"field":"x1"},"y":{"field":"y1"}},"id":"c8878274-a4b9-421d-9ed4-ab1b1a9e1452","type":"ImageURL"},{"attributes":{},"id":"73894e6a-a0c3-43d3-96d3-7efd7b32f16e","type":"ToolEvents"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"9863aceb-d547-44e0-93ca-ca898e0371bb","type":"Range1d"},{"attributes":{"data_source":{"id":"1b131b2a-5d12-4771-8764-4deab0f19684","type":"ColumnDataSource"},"glyph":{"id":"c8878274-a4b9-421d-9ed4-ab1b1a9e1452","type":"ImageURL"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"932be72e-a9ed-4844-9b2a-3eb62bed3a96","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"380fb4cd-6f90-4201-8687-4f5c8e3fee6d","type":"Toolbar"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"5a960ad5-e478-4ac6-b12a-efd718b3aa71","type":"Range1d"},{"attributes":{},"id":"3d05ffca-b80b-4644-b9bf-2569fd9dce7d","type":"BasicTickFormatter"},{"attributes":{"anchor":"bottom_right","url":{"value":"http://bokeh.pydata.org/en/latest/_static/images/logo.png"},"x":{"value":200},"y":{"value":-100}},"id":"15813d44-6fb4-46b9-9a83-f9a0a5aefd8a","type":"ImageURL"},{"attributes":{"plot":{"id":"61587374-a606-4b34-9234-fe5d14e1bf68","type":"Plot"},"ticker":{"id":"bb8324bb-7d76-4522-b372-804141319345","type":"BasicTicker"}},"id":"7e4f99df-52a8-4faa-a5b0-7d047a974ad6","type":"Grid"},{"attributes":{"formatter":{"id":"3d05ffca-b80b-4644-b9bf-2569fd9dce7d","type":"BasicTickFormatter"},"plot":{"id":"61587374-a606-4b34-9234-fe5d14e1bf68","type":"Plot"},"ticker":{"id":"bb8324bb-7d76-4522-b372-804141319345","type":"BasicTicker"}},"id":"2dff4d23-600d-4110-9fb3-d028b82df127","type":"LinearAxis"},{"attributes":{"formatter":{"id":"a821ff02-f831-4047-b1c1-64cef20b9702","type":"BasicTickFormatter"},"plot":{"id":"61587374-a606-4b34-9234-fe5d14e1bf68","type":"Plot"},"ticker":{"id":"b4b79fc8-ee05-46ba-bccc-16845cf1aa0a","type":"BasicTicker"}},"id":"e8107ec7-b869-4e29-a3b4-6d639d04d624","type":"LinearAxis"}],"root_ids":["61587374-a606-4b34-9234-fe5d14e1bf68"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"9ad68dcc-acff-48e7-be27-202915469f81","elementid":"07dd7e13-d8d5-415e-8196-f0f137892c65","modelid":"61587374-a606-4b34-9234-fe5d14e1bf68"}];
              
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