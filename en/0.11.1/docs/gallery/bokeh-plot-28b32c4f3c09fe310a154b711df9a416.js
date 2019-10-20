
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
  };var element = document.getElementById("d4b259c4-7d12-40b4-8bf3-26e9879dfbb6");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'd4b259c4-7d12-40b4-8bf3-26e9879dfbb6' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"e6638c88-b622-4a47-bdb2-be06637e5d85":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.8},"line_color":{"value":null},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"0a47ab25-1592-44e7-b25d-b480b7dbf6c1","type":"Patches"},{"attributes":{"plot":{"id":"42bf424a-dff5-4641-8b1b-211c4a390e20","subtype":"Figure","type":"Plot"}},"id":"38deacf7-4b42-4d01-ac9e-3fbfedc3191e","type":"HelpTool"},{"attributes":{"plot":{"id":"42bf424a-dff5-4641-8b1b-211c4a390e20","subtype":"Figure","type":"Plot"}},"id":"62c27df7-8263-4b81-862b-dc0e533c2fd8","type":"ResizeTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d540ec6e-6b43-45aa-8aa9-818e1652e3fa","type":"BoxAnnotation"},{"attributes":{},"id":"5b731810-c965-414e-8ae5-0c9f4bb944a7","type":"BasicTickFormatter"},{"attributes":{},"id":"fa8feed5-48bc-4ade-9853-cf9d1b9f1a95","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"09f1558e-04f7-45a9-b166-9774c04e7760","type":"Patches"},{"attributes":{},"id":"1d5f2b37-1294-40cd-b733-3f419c88debd","type":"BasicTicker"},{"attributes":{"callback":null},"id":"4fc7aa18-0bc7-4ddf-8555-5b91b65a9840","type":"DataRange1d"},{"attributes":{},"id":"82e44a54-a502-42ef-ab6c-619f4aa66962","type":"BasicTicker"},{"attributes":{"below":[{"id":"0b01b7b2-887c-45e1-9e0b-2de2affd6b6a","type":"LinearAxis"}],"left":[{"id":"1c4fa6fb-cc46-4edb-bee0-b3e0fc461547","type":"LinearAxis"}],"renderers":[{"id":"0b01b7b2-887c-45e1-9e0b-2de2affd6b6a","type":"LinearAxis"},{"id":"69ea8e79-6dad-4d14-a5b3-00923a94fe1b","type":"Grid"},{"id":"1c4fa6fb-cc46-4edb-bee0-b3e0fc461547","type":"LinearAxis"},{"id":"2c39b647-2dec-4a33-ab21-47c4eb08f1fb","type":"Grid"},{"id":"d540ec6e-6b43-45aa-8aa9-818e1652e3fa","type":"BoxAnnotation"},{"id":"23807c8d-b542-4ade-868c-ba9d892b3ef1","type":"GlyphRenderer"}],"tool_events":{"id":"79d43954-9b7f-4ee2-b40e-7d17732259e2","type":"ToolEvents"},"tools":[{"id":"98fea66d-fc0a-44c6-aab8-6a5e67d0a4cc","type":"PanTool"},{"id":"d2c99bb5-0ff4-42ac-8249-852e5fe3bc07","type":"WheelZoomTool"},{"id":"21ec9324-74e7-4e29-ad19-591689a7a016","type":"BoxZoomTool"},{"id":"1a0b474b-73a4-4d92-b3eb-5793ecf5457e","type":"PreviewSaveTool"},{"id":"62c27df7-8263-4b81-862b-dc0e533c2fd8","type":"ResizeTool"},{"id":"edbae7b9-4c77-4548-aae6-0f2a3f58b03f","type":"ResetTool"},{"id":"38deacf7-4b42-4d01-ac9e-3fbfedc3191e","type":"HelpTool"}],"x_range":{"id":"4fc7aa18-0bc7-4ddf-8555-5b91b65a9840","type":"DataRange1d"},"y_range":{"id":"d37f8aaa-41c0-4c3d-8679-80adf3c11213","type":"DataRange1d"}},"id":"42bf424a-dff5-4641-8b1b-211c4a390e20","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"d0f897c5-de41-412d-8554-1b441de709f4","type":"ColumnDataSource"},"glyph":{"id":"0a47ab25-1592-44e7-b25d-b480b7dbf6c1","type":"Patches"},"hover_glyph":null,"nonselection_glyph":{"id":"09f1558e-04f7-45a9-b166-9774c04e7760","type":"Patches"},"selection_glyph":null},"id":"23807c8d-b542-4ade-868c-ba9d892b3ef1","type":"GlyphRenderer"},{"attributes":{"dimension":1,"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"42bf424a-dff5-4641-8b1b-211c4a390e20","subtype":"Figure","type":"Plot"},"ticker":{"id":"82e44a54-a502-42ef-ab6c-619f4aa66962","type":"BasicTicker"}},"id":"2c39b647-2dec-4a33-ab21-47c4eb08f1fb","type":"Grid"},{"attributes":{"formatter":{"id":"fa8feed5-48bc-4ade-9853-cf9d1b9f1a95","type":"BasicTickFormatter"},"plot":{"id":"42bf424a-dff5-4641-8b1b-211c4a390e20","subtype":"Figure","type":"Plot"},"ticker":{"id":"82e44a54-a502-42ef-ab6c-619f4aa66962","type":"BasicTicker"}},"id":"1c4fa6fb-cc46-4edb-bee0-b3e0fc461547","type":"LinearAxis"},{"attributes":{"formatter":{"id":"5b731810-c965-414e-8ae5-0c9f4bb944a7","type":"BasicTickFormatter"},"plot":{"id":"42bf424a-dff5-4641-8b1b-211c4a390e20","subtype":"Figure","type":"Plot"},"ticker":{"id":"1d5f2b37-1294-40cd-b733-3f419c88debd","type":"BasicTicker"}},"id":"0b01b7b2-887c-45e1-9e0b-2de2affd6b6a","type":"LinearAxis"},{"attributes":{"plot":{"id":"42bf424a-dff5-4641-8b1b-211c4a390e20","subtype":"Figure","type":"Plot"}},"id":"1a0b474b-73a4-4d92-b3eb-5793ecf5457e","type":"PreviewSaveTool"},{"attributes":{"callback":null},"id":"d37f8aaa-41c0-4c3d-8679-80adf3c11213","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["ys","xs","fill_color"],"data":{"fill_color":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"],"xs":[[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]],"ys":[[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,11.0,45.0,93.0,46.0,81.0,40.0,37.0,24.0,86.0,14.0,79.0,95.0,68.0,84.0,89.0,47.0,52.0,43.0,94.0,24.0],[24.0,94.0,43.0,52.0,47.0,89.0,84.0,68.0,95.0,79.0,14.0,86.0,24.0,37.0,40.0,81.0,46.0,93.0,45.0,11.0,77.0,59.0,163.0,107.0,93.0,104.0,133.0,98.0,135.0,81.0,108.0,152.0,148.0,111.0,122.0,75.0,146.0,133.0,165.0,63.0],[63.0,165.0,133.0,146.0,75.0,122.0,111.0,148.0,152.0,108.0,81.0,135.0,98.0,133.0,104.0,93.0,107.0,163.0,59.0,77.0,137.0,130.0,213.0,148.0,155.0,195.0,184.0,143.0,198.0,174.0,201.0,192.0,199.0,206.0,150.0,170.0,183.0,213.0,213.0,93.0],[93.0,213.0,213.0,183.0,170.0,150.0,206.0,199.0,192.0,201.0,174.0,198.0,143.0,184.0,195.0,155.0,148.0,213.0,130.0,137.0,228.0,210.0,237.0,181.0,192.0,247.0,215.0,226.0,229.0,253.0,254.0,231.0,297.0,290.0,195.0,248.0,247.0,227.0,233.0,113.0],[113.0,233.0,227.0,247.0,248.0,195.0,290.0,297.0,231.0,254.0,253.0,229.0,226.0,215.0,247.0,192.0,181.0,237.0,210.0,228.0,323.0,260.0,312.0,277.0,250.0,332.0,244.0,256.0,299.0,314.0,287.0,250.0,360.0,368.0,244.0,330.0,313.0,262.0,268.0,159.0],[159.0,268.0,262.0,313.0,330.0,244.0,368.0,360.0,250.0,287.0,314.0,299.0,256.0,244.0,332.0,250.0,277.0,312.0,260.0,323.0,418.0,304.0,396.0,306.0,283.0,365.0,292.0,315.0,310.0,399.0,317.0,323.0,382.0,436.0,314.0,356.0,400.0,341.0,345.0,205.0],[205.0,345.0,341.0,400.0,356.0,314.0,436.0,382.0,323.0,317.0,399.0,310.0,315.0,292.0,365.0,283.0,306.0,396.0,304.0,418.0,440.0,357.0,412.0,365.0,361.0,426.0,342.0,360.0,403.0,450.0,363.0,382.0,473.0,493.0,342.0,380.0,468.0,422.0,442.0,249.0],[249.0,442.0,422.0,468.0,380.0,342.0,493.0,473.0,382.0,363.0,450.0,403.0,360.0,342.0,426.0,361.0,365.0,412.0,357.0,440.0,499.0,413.0,499.0,463.0,449.0,477.0,439.0,432.0,430.0,489.0,406.0,393.0,567.0,510.0,381.0,447.0,559.0,495.0,484.0,275.0],[275.0,484.0,495.0,559.0,447.0,381.0,510.0,567.0,393.0,406.0,489.0,430.0,432.0,439.0,477.0,449.0,463.0,499.0,413.0,499.0,542.0,478.0,594.0,538.0,523.0,518.0,527.0,497.0,478.0,520.0,450.0,471.0,618.0,531.0,442.0,511.0,626.0,556.0,525.0,315.0],[315.0,525.0,556.0,626.0,511.0,442.0,531.0,618.0,471.0,450.0,520.0,478.0,497.0,527.0,518.0,523.0,538.0,594.0,478.0,542.0,597.0,511.0,607.0,568.0,587.0,611.0,544.0,530.0,508.0,550.0,517.0,484.0,713.0,550.0,527.0,528.0,636.0,595.0,621.0,331.0]]}},"id":"d0f897c5-de41-412d-8554-1b441de709f4","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"42bf424a-dff5-4641-8b1b-211c4a390e20","subtype":"Figure","type":"Plot"}},"id":"edbae7b9-4c77-4548-aae6-0f2a3f58b03f","type":"ResetTool"},{"attributes":{"plot":{"id":"42bf424a-dff5-4641-8b1b-211c4a390e20","subtype":"Figure","type":"Plot"}},"id":"98fea66d-fc0a-44c6-aab8-6a5e67d0a4cc","type":"PanTool"},{"attributes":{},"id":"79d43954-9b7f-4ee2-b40e-7d17732259e2","type":"ToolEvents"},{"attributes":{"overlay":{"id":"d540ec6e-6b43-45aa-8aa9-818e1652e3fa","type":"BoxAnnotation"},"plot":{"id":"42bf424a-dff5-4641-8b1b-211c4a390e20","subtype":"Figure","type":"Plot"}},"id":"21ec9324-74e7-4e29-ad19-591689a7a016","type":"BoxZoomTool"},{"attributes":{"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"42bf424a-dff5-4641-8b1b-211c4a390e20","subtype":"Figure","type":"Plot"},"ticker":{"id":"1d5f2b37-1294-40cd-b733-3f419c88debd","type":"BasicTicker"}},"id":"69ea8e79-6dad-4d14-a5b3-00923a94fe1b","type":"Grid"},{"attributes":{"plot":{"id":"42bf424a-dff5-4641-8b1b-211c4a390e20","subtype":"Figure","type":"Plot"}},"id":"d2c99bb5-0ff4-42ac-8249-852e5fe3bc07","type":"WheelZoomTool"}],"root_ids":["42bf424a-dff5-4641-8b1b-211c4a390e20"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"e6638c88-b622-4a47-bdb2-be06637e5d85","elementid":"d4b259c4-7d12-40b4-8bf3-26e9879dfbb6","modelid":"42bf424a-dff5-4641-8b1b-211c4a390e20"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
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