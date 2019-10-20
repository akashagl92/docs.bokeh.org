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
      };var element = document.getElementById("fe4e663c-678b-4405-9303-f00284cd437a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fe4e663c-678b-4405-9303-f00284cd437a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"ee1af440-bfc6-4902-95f3-8031894e6d21":{"roots":{"references":[{"attributes":{},"id":"216bfcbe-7b89-4700-a2cc-8b46ac84f6f2","type":"ToolEvents"},{"attributes":{"below":[{"id":"5f9cadbc-5722-4fd1-b1a3-924bf67bbf49","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"43e134d8-dbec-4b90-95d0-84a32eeece63","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"48bfef6f-a55f-4564-ad4d-236e7c5bb205","type":"GlyphRenderer"},{"id":"5f9cadbc-5722-4fd1-b1a3-924bf67bbf49","type":"LinearAxis"},{"id":"43e134d8-dbec-4b90-95d0-84a32eeece63","type":"LinearAxis"},{"id":"095142a4-7b6a-4301-b6dc-9ba54d0665c5","type":"Grid"},{"id":"b9fd7ebd-0b80-4413-945a-9c5906646371","type":"Grid"}],"title":null,"tool_events":{"id":"216bfcbe-7b89-4700-a2cc-8b46ac84f6f2","type":"ToolEvents"},"toolbar":{"id":"4cc166e4-0a20-416c-85a2-fd389f8790de","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4f329511-8096-4185-8541-26add61d5b66","type":"DataRange1d"},"y_range":{"id":"44a6ee97-e0f4-4ab1-b922-dea11071f96c","type":"DataRange1d"}},"id":"354c4db1-68ac-45f2-a30c-c785116e3cc1","type":"Plot"},{"attributes":{"callback":null},"id":"44a6ee97-e0f4-4ab1-b922-dea11071f96c","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"4cc166e4-0a20-416c-85a2-fd389f8790de","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#b3de69"},"height":{"value":0.5},"right":{"field":"right"},"y":{"field":"y"}},"id":"a1cf7a74-e5be-442b-a17a-6d090b9bc638","type":"HBar"},{"attributes":{},"id":"71a5d0ed-9f31-4881-9e50-f07bf9ec521c","type":"BasicTicker"},{"attributes":{"callback":null},"id":"4f329511-8096-4185-8541-26add61d5b66","type":"DataRange1d"},{"attributes":{},"id":"8b99a31c-5a54-4274-9474-b0da49538216","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"354c4db1-68ac-45f2-a30c-c785116e3cc1","type":"Plot"},"ticker":{"id":"8b99a31c-5a54-4274-9474-b0da49538216","type":"BasicTicker"}},"id":"b9fd7ebd-0b80-4413-945a-9c5906646371","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","right"],"data":{"right":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0],"y":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0]}},"id":"1bc78b33-91fb-4d1f-b479-18714ba57471","type":"ColumnDataSource"},{"attributes":{},"id":"f38643e3-6233-4a6d-b17f-460ea731015e","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"354c4db1-68ac-45f2-a30c-c785116e3cc1","type":"Plot"},"ticker":{"id":"71a5d0ed-9f31-4881-9e50-f07bf9ec521c","type":"BasicTicker"}},"id":"095142a4-7b6a-4301-b6dc-9ba54d0665c5","type":"Grid"},{"attributes":{"formatter":{"id":"f38643e3-6233-4a6d-b17f-460ea731015e","type":"BasicTickFormatter"},"plot":{"id":"354c4db1-68ac-45f2-a30c-c785116e3cc1","type":"Plot"},"ticker":{"id":"71a5d0ed-9f31-4881-9e50-f07bf9ec521c","type":"BasicTicker"}},"id":"5f9cadbc-5722-4fd1-b1a3-924bf67bbf49","type":"LinearAxis"},{"attributes":{"formatter":{"id":"f447f546-227c-4b8a-919a-e468e028b8e7","type":"BasicTickFormatter"},"plot":{"id":"354c4db1-68ac-45f2-a30c-c785116e3cc1","type":"Plot"},"ticker":{"id":"8b99a31c-5a54-4274-9474-b0da49538216","type":"BasicTicker"}},"id":"43e134d8-dbec-4b90-95d0-84a32eeece63","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1bc78b33-91fb-4d1f-b479-18714ba57471","type":"ColumnDataSource"},"glyph":{"id":"a1cf7a74-e5be-442b-a17a-6d090b9bc638","type":"HBar"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"48bfef6f-a55f-4564-ad4d-236e7c5bb205","type":"GlyphRenderer"},{"attributes":{},"id":"f447f546-227c-4b8a-919a-e468e028b8e7","type":"BasicTickFormatter"}],"root_ids":["354c4db1-68ac-45f2-a30c-c785116e3cc1"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"ee1af440-bfc6-4902-95f3-8031894e6d21","elementid":"fe4e663c-678b-4405-9303-f00284cd437a","modelid":"354c4db1-68ac-45f2-a30c-c785116e3cc1"}];
              
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