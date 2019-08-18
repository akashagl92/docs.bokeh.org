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
      };var element = document.getElementById("daae7297-4332-4b6f-91ae-ba19800a3087");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'daae7297-4332-4b6f-91ae-ba19800a3087' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"ffcbaebc-b012-4bf4-aa01-2c7b5b1ef892":{"roots":{"references":[{"attributes":{"source":{"id":"a4b55fcc-dcde-4651-8fd6-7d5ae932267b","type":"ColumnDataSource"}},"id":"8faca974-f5b9-48ec-aa91-e4cf67f03ebd","type":"CDSView"},{"attributes":{"label":{"value":"y=x^2"},"renderers":[{"id":"84823007-f4bb-421e-b9f8-fcb174ebe390","type":"GlyphRenderer"}]},"id":"19d878bb-f61e-4d0b-8142-73c9fd539a8b","type":"LegendItem"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"399c658f-3a26-4a3e-b12d-328778d29d63","type":"Line"},{"attributes":{"line_color":{"value":"orange"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"eb01c7cf-17cb-4fc5-970e-0af6bc605d4d","type":"Line"},{"attributes":{},"id":"5075cf1b-0d82-49a5-b46a-2db731cc9919","type":"PanTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"acbda14c-87d1-43f4-835a-53410d286a34","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"a4b55fcc-dcde-4651-8fd6-7d5ae932267b","type":"ColumnDataSource"},{"attributes":{"source":{"id":"5f23a367-ac37-45c7-b82c-a8aca02440be","type":"ColumnDataSource"}},"id":"7891e9cd-9ab8-40cc-9d6b-9bb926f048b0","type":"CDSView"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"1da12ff1-9be2-4533-b9ae-c586af04075b","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"ab9fd96d-191f-4d6f-937d-7f4675ef737a","type":"Circle"},{"attributes":{"axis_label":"particles","formatter":{"id":"5aa3f27a-860c-4aa6-a3f7-c4c7fd51a4dc","type":"LogTickFormatter"},"plot":{"id":"f6beafc8-4752-4e9c-8ef2-3960486c24ff","subtype":"Figure","type":"Plot"},"ticker":{"id":"808e344d-3924-4d20-9209-8bc896ef8444","type":"LogTicker"}},"id":"fbf9ce05-4827-4e70-939b-2d2b09c09644","type":"LogAxis"},{"attributes":{"label":{"value":"y=10^x^2"},"renderers":[{"id":"98700867-9bc7-493a-833a-4e06299fb1d5","type":"GlyphRenderer"}]},"id":"7b3b56f7-07d6-4499-816e-dd74166d332e","type":"LegendItem"},{"attributes":{"plot":null,"text":"log axis example"},"id":"16ba814c-cd2a-4175-96b2-126c32a5030e","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"1188ae68-4b58-4688-92a5-5163e87bd6a3","type":"ColumnDataSource"},{"attributes":{"ticker":null},"id":"5aa3f27a-860c-4aa6-a3f7-c4c7fd51a4dc","type":"LogTickFormatter"},{"attributes":{"axis_label":"sections","formatter":{"id":"d6ea69f5-9e04-4e5b-9704-63ec19da43ff","type":"BasicTickFormatter"},"plot":{"id":"f6beafc8-4752-4e9c-8ef2-3960486c24ff","subtype":"Figure","type":"Plot"},"ticker":{"id":"457e2d7b-9c6a-4a5f-8671-e64fd911f386","type":"BasicTicker"}},"id":"6a83600e-9eaa-42f3-9d4e-17516f150d89","type":"LinearAxis"},{"attributes":{"callback":null,"end":100000000000,"start":0.001},"id":"f6fba942-aebc-4be2-9190-3f5d0abe49ba","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5075cf1b-0d82-49a5-b46a-2db731cc9919","type":"PanTool"},{"id":"b3b2340a-8dfc-477a-bad0-96f1a00b27b2","type":"BoxZoomTool"},{"id":"d3dd33b5-9161-4aa6-adcd-250503863f4a","type":"ResetTool"},{"id":"1922be30-e3f4-4dd8-9cae-87b4849fcea1","type":"SaveTool"}]},"id":"ceb304dc-c4db-408a-91df-60ad526da926","type":"Toolbar"},{"attributes":{"data_source":{"id":"1188ae68-4b58-4688-92a5-5163e87bd6a3","type":"ColumnDataSource"},"glyph":{"id":"5849f734-4057-4e3d-ac48-391292329311","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8bd56ca8-e408-4b74-8c6f-6bb8a242581a","type":"Circle"},"selection_glyph":null,"view":{"id":"d68e8366-a953-4645-9b0d-50b2858b98a7","type":"CDSView"}},"id":"852a6601-330d-4c4d-beb9-557e6e03f716","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"e6db1432-4873-44f4-a15f-3535f9670c2b","type":"DataRange1d"},{"attributes":{"source":{"id":"6af6a002-2760-4f93-a6fb-126d0d12f467","type":"ColumnDataSource"}},"id":"1f941a27-5d53-48e3-a62b-cce8bad1343b","type":"CDSView"},{"attributes":{},"id":"f890533e-33ae-4856-9637-3742d676e3fb","type":"LinearScale"},{"attributes":{"source":{"id":"73eccc6c-eaf2-4018-95ca-83498a1f60cf","type":"ColumnDataSource"}},"id":"8ac4b974-d24b-4d33-b62d-e87cb7a3d676","type":"CDSView"},{"attributes":{"data_source":{"id":"886e7eba-47cd-416c-8647-12a1589ddfa4","type":"ColumnDataSource"},"glyph":{"id":"1da12ff1-9be2-4533-b9ae-c586af04075b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ab9fd96d-191f-4d6f-937d-7f4675ef737a","type":"Circle"},"selection_glyph":null,"view":{"id":"64f6b3c3-58ec-4481-9536-69de0ea784b9","type":"CDSView"}},"id":"67e731a5-61f0-4c61-91bb-04b6f27843db","type":"GlyphRenderer"},{"attributes":{},"id":"d3dd33b5-9161-4aa6-adcd-250503863f4a","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"f6beafc8-4752-4e9c-8ef2-3960486c24ff","subtype":"Figure","type":"Plot"},"ticker":{"id":"808e344d-3924-4d20-9209-8bc896ef8444","type":"LogTicker"}},"id":"ec322896-3642-4764-b745-1cec5827db92","type":"Grid"},{"attributes":{"data_source":{"id":"5f23a367-ac37-45c7-b82c-a8aca02440be","type":"ColumnDataSource"},"glyph":{"id":"dc74d2a4-f36b-4547-8c14-7c9383b51a81","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"58f7704c-7aa1-487a-b1af-552ce5d5ae12","type":"Line"},"selection_glyph":null,"view":{"id":"7891e9cd-9ab8-40cc-9d6b-9bb926f048b0","type":"CDSView"}},"id":"44c3004c-f679-454d-a34d-d6c632b88f1e","type":"GlyphRenderer"},{"attributes":{},"id":"d6ea69f5-9e04-4e5b-9704-63ec19da43ff","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"ddfc279f-57cc-42ae-9e52-c8d4faaa245e","type":"BoxAnnotation"}},"id":"b3b2340a-8dfc-477a-bad0-96f1a00b27b2","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"6a83600e-9eaa-42f3-9d4e-17516f150d89","type":"LinearAxis"}],"left":[{"id":"fbf9ce05-4827-4e70-939b-2d2b09c09644","type":"LogAxis"}],"renderers":[{"id":"6a83600e-9eaa-42f3-9d4e-17516f150d89","type":"LinearAxis"},{"id":"39917601-fde4-4d44-ab34-a39329cb38f3","type":"Grid"},{"id":"fbf9ce05-4827-4e70-939b-2d2b09c09644","type":"LogAxis"},{"id":"ec322896-3642-4764-b745-1cec5827db92","type":"Grid"},{"id":"ddfc279f-57cc-42ae-9e52-c8d4faaa245e","type":"BoxAnnotation"},{"id":"2c051d45-0eba-4e38-ac95-6a46e7957675","type":"Legend"},{"id":"eea1e5bb-4154-45b0-9fbe-753ba3569c34","type":"GlyphRenderer"},{"id":"852a6601-330d-4c4d-beb9-557e6e03f716","type":"GlyphRenderer"},{"id":"84823007-f4bb-421e-b9f8-fcb174ebe390","type":"GlyphRenderer"},{"id":"44c3004c-f679-454d-a34d-d6c632b88f1e","type":"GlyphRenderer"},{"id":"67e731a5-61f0-4c61-91bb-04b6f27843db","type":"GlyphRenderer"},{"id":"98700867-9bc7-493a-833a-4e06299fb1d5","type":"GlyphRenderer"}],"title":{"id":"16ba814c-cd2a-4175-96b2-126c32a5030e","type":"Title"},"toolbar":{"id":"ceb304dc-c4db-408a-91df-60ad526da926","type":"Toolbar"},"x_range":{"id":"e6db1432-4873-44f4-a15f-3535f9670c2b","type":"DataRange1d"},"x_scale":{"id":"f890533e-33ae-4856-9637-3742d676e3fb","type":"LinearScale"},"y_range":{"id":"f6fba942-aebc-4be2-9190-3f5d0abe49ba","type":"Range1d"},"y_scale":{"id":"871549f1-a02a-4178-92a0-5d5bd0e6bcb2","type":"LogScale"}},"id":"f6beafc8-4752-4e9c-8ef2-3960486c24ff","subtype":"Figure","type":"Plot"},{"attributes":{"items":[{"id":"c744ec66-b478-4f5b-b7bc-1246fbc620b1","type":"LegendItem"},{"id":"19d878bb-f61e-4d0b-8142-73c9fd539a8b","type":"LegendItem"},{"id":"5fdbba10-2a83-4031-95c5-1c6d93fd6f41","type":"LegendItem"},{"id":"7b3b56f7-07d6-4499-816e-dd74166d332e","type":"LegendItem"}],"plot":{"id":"f6beafc8-4752-4e9c-8ef2-3960486c24ff","subtype":"Figure","type":"Plot"}},"id":"2c051d45-0eba-4e38-ac95-6a46e7957675","type":"Legend"},{"attributes":{"plot":{"id":"f6beafc8-4752-4e9c-8ef2-3960486c24ff","subtype":"Figure","type":"Plot"},"ticker":{"id":"457e2d7b-9c6a-4a5f-8671-e64fd911f386","type":"BasicTicker"}},"id":"39917601-fde4-4d44-ab34-a39329cb38f3","type":"Grid"},{"attributes":{"line_color":{"value":"red"},"x":{"field":"x"},"y":{"field":"y"}},"id":"dc74d2a4-f36b-4547-8c14-7c9383b51a81","type":"Line"},{"attributes":{"source":{"id":"886e7eba-47cd-416c-8647-12a1589ddfa4","type":"ColumnDataSource"}},"id":"64f6b3c3-58ec-4481-9536-69de0ea784b9","type":"CDSView"},{"attributes":{"data_source":{"id":"73eccc6c-eaf2-4018-95ca-83498a1f60cf","type":"ColumnDataSource"},"glyph":{"id":"eb01c7cf-17cb-4fc5-970e-0af6bc605d4d","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ec4defae-6f0d-40c3-8f1c-7d360f03d3ec","type":"Line"},"selection_glyph":null,"view":{"id":"8ac4b974-d24b-4d33-b62d-e87cb7a3d676","type":"CDSView"}},"id":"98700867-9bc7-493a-833a-4e06299fb1d5","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ec2f1018-132a-491e-8d16-6e6dd5051455","type":"Line"},{"attributes":{"data_source":{"id":"a4b55fcc-dcde-4651-8fd6-7d5ae932267b","type":"ColumnDataSource"},"glyph":{"id":"399c658f-3a26-4a3e-b12d-328778d29d63","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ec2f1018-132a-491e-8d16-6e6dd5051455","type":"Line"},"selection_glyph":null,"view":{"id":"8faca974-f5b9-48ec-aa91-e4cf67f03ebd","type":"CDSView"}},"id":"eea1e5bb-4154-45b0-9fbe-753ba3569c34","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"5849f734-4057-4e3d-ac48-391292329311","type":"Circle"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"ec4defae-6f0d-40c3-8f1c-7d360f03d3ec","type":"Line"},{"attributes":{"num_minor_ticks":10},"id":"808e344d-3924-4d20-9209-8bc896ef8444","type":"LogTicker"},{"attributes":{"data_source":{"id":"6af6a002-2760-4f93-a6fb-126d0d12f467","type":"ColumnDataSource"},"glyph":{"id":"1d6245c9-c604-4f1c-8744-eff9a518b5fd","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"acbda14c-87d1-43f4-835a-53410d286a34","type":"Line"},"selection_glyph":null,"view":{"id":"1f941a27-5d53-48e3-a62b-cce8bad1343b","type":"CDSView"}},"id":"84823007-f4bb-421e-b9f8-fcb174ebe390","type":"GlyphRenderer"},{"attributes":{},"id":"1922be30-e3f4-4dd8-9cae-87b4849fcea1","type":"SaveTool"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"eea1e5bb-4154-45b0-9fbe-753ba3569c34","type":"GlyphRenderer"},{"id":"852a6601-330d-4c4d-beb9-557e6e03f716","type":"GlyphRenderer"}]},"id":"c744ec66-b478-4f5b-b7bc-1246fbc620b1","type":"LegendItem"},{"attributes":{"label":{"value":"y=10^x"},"renderers":[{"id":"44c3004c-f679-454d-a34d-d6c632b88f1e","type":"GlyphRenderer"},{"id":"67e731a5-61f0-4c61-91bb-04b6f27843db","type":"GlyphRenderer"}]},"id":"5fdbba10-2a83-4031-95c5-1c6d93fd6f41","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"5f23a367-ac37-45c7-b82c-a8aca02440be","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"58f7704c-7aa1-487a-b1af-552ce5d5ae12","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"886e7eba-47cd-416c-8647-12a1589ddfa4","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1188ae68-4b58-4688-92a5-5163e87bd6a3","type":"ColumnDataSource"}},"id":"d68e8366-a953-4645-9b0d-50b2858b98a7","type":"CDSView"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"1d6245c9-c604-4f1c-8744-eff9a518b5fd","type":"Line"},{"attributes":{},"id":"457e2d7b-9c6a-4a5f-8671-e64fd911f386","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"8bd56ca8-e408-4b74-8c6f-6bb8a242581a","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.023292992280754,1.7782794100389228,10.0,177.82794100389228,10000.0,1778279.410038923,1000000000.0]}},"id":"73eccc6c-eaf2-4018-95ca-83498a1f60cf","type":"ColumnDataSource"},{"attributes":{},"id":"871549f1-a02a-4178-92a0-5d5bd0e6bcb2","type":"LogScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.010000000000000002,0.25,1.0,2.25,4.0,6.25,9.0]}},"id":"6af6a002-2760-4f93-a6fb-126d0d12f467","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ddfc279f-57cc-42ae-9e52-c8d4faaa245e","type":"BoxAnnotation"}],"root_ids":["f6beafc8-4752-4e9c-8ef2-3960486c24ff"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"ffcbaebc-b012-4bf4-aa01-2c7b5b1ef892","elementid":"daae7297-4332-4b6f-91ae-ba19800a3087","modelid":"f6beafc8-4752-4e9c-8ef2-3960486c24ff"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
