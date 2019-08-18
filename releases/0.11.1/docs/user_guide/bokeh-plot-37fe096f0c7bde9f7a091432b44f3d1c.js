
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
  };var element = document.getElementById("b2c3a9c7-e6f6-4fb6-8409-f9bc25fd8874");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'b2c3a9c7-e6f6-4fb6-8409-f9bc25fd8874' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"8e5e3603-c01e-472e-a11f-5eeeb1806e5a":{"roots":{"references":[{"attributes":{"callback":null},"id":"3206e209-8528-4a08-a72b-aa9eabddda5c","type":"DataRange1d"},{"attributes":{"below":[{"id":"7e87a78e-897e-40a9-bf81-4cf86f0d960c","type":"LinearAxis"}],"left":[{"id":"9c73c0b5-09c7-42f8-a197-dc92ce1cff38","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"7e87a78e-897e-40a9-bf81-4cf86f0d960c","type":"LinearAxis"},{"id":"f478e4f6-6601-46ff-b5d3-3b5a164c7a30","type":"Grid"},{"id":"9c73c0b5-09c7-42f8-a197-dc92ce1cff38","type":"LinearAxis"},{"id":"70e01a66-6a00-4fd5-91c2-bd4d0cc33383","type":"Grid"},{"id":"44df88a9-491d-4c74-af6f-56e6a4653959","type":"BoxAnnotation"},{"id":"55a22a7a-aa62-458b-8bb7-67ca4a52ef88","type":"GlyphRenderer"}],"tool_events":{"id":"7b618bdc-e1ec-410b-b7c4-49cdb873bc2f","type":"ToolEvents"},"tools":[{"id":"b82ba66e-a617-4d89-92a0-215295446a4e","type":"PanTool"},{"id":"12ca555e-50c7-477f-878b-83c6ab84b821","type":"WheelZoomTool"},{"id":"80362a4c-c9e8-457b-8095-8a1406a55a9c","type":"BoxZoomTool"},{"id":"4984df3b-17d0-4c9b-9feb-590201ad4321","type":"PreviewSaveTool"},{"id":"0757e4e0-aa05-4734-b4bc-d0993af34102","type":"ResizeTool"},{"id":"c374c14c-ca0e-47b8-893d-c2a93ff95ac6","type":"ResetTool"},{"id":"d3a99ceb-897f-4c5a-867d-ffbefee892a6","type":"HelpTool"}],"x_range":{"id":"06e2ce2d-2bd2-41d8-9c1e-d6a359a291ff","type":"DataRange1d"},"y_range":{"id":"8229919e-7478-496e-bf07-ba6d049aa39e","type":"DataRange1d"}},"id":"9cfa3ec0-1757-4483-b474-33def6f2e366","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"44df88a9-491d-4c74-af6f-56e6a4653959","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"9cfa3ec0-1757-4483-b474-33def6f2e366","subtype":"Figure","type":"Plot"}},"id":"d3a99ceb-897f-4c5a-867d-ffbefee892a6","type":"HelpTool"},{"attributes":{"plot":{"id":"9b97d09b-60fd-45fc-ab54-7bd70fc48dd1","subtype":"Figure","type":"Plot"}},"id":"4124af0f-84ad-4507-8bfc-e015ff335075","type":"PanTool"},{"attributes":{"callback":null},"id":"8229919e-7478-496e-bf07-ba6d049aa39e","type":"DataRange1d"},{"attributes":{"plot":{"id":"9cfa3ec0-1757-4483-b474-33def6f2e366","subtype":"Figure","type":"Plot"}},"id":"c374c14c-ca0e-47b8-893d-c2a93ff95ac6","type":"ResetTool"},{"attributes":{"plot":{"id":"9cfa3ec0-1757-4483-b474-33def6f2e366","subtype":"Figure","type":"Plot"}},"id":"4984df3b-17d0-4c9b-9feb-590201ad4321","type":"PreviewSaveTool"},{"attributes":{"child":{"id":"9b97d09b-60fd-45fc-ab54-7bd70fc48dd1","subtype":"Figure","type":"Plot"},"title":"line"},"id":"016b01ba-9763-42c3-95ba-482f878f0416","type":"Panel"},{"attributes":{"formatter":{"id":"ba78a419-0e42-4f18-af4f-1d124db1ba64","type":"BasicTickFormatter"},"plot":{"id":"9b97d09b-60fd-45fc-ab54-7bd70fc48dd1","subtype":"Figure","type":"Plot"},"ticker":{"id":"7e4901f4-8e64-4eef-b597-577149ce094a","type":"BasicTicker"}},"id":"aef2a4fc-0997-442e-aa5c-5438314f80f5","type":"LinearAxis"},{"attributes":{"child":{"id":"9cfa3ec0-1757-4483-b474-33def6f2e366","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"4a26b613-9c8e-40df-9610-8b592352ce8b","type":"Panel"},{"attributes":{"data_source":{"id":"271ac40f-041e-4fdb-9aa1-5daba974651b","type":"ColumnDataSource"},"glyph":{"id":"1d5a2d52-f712-4a26-881a-51f80d569a61","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"2e796f8f-d68a-4af7-a8c6-bd96cc6e4482","type":"Line"},"selection_glyph":null},"id":"4bc3c403-ad11-405f-b171-132d58962837","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"9cfa3ec0-1757-4483-b474-33def6f2e366","subtype":"Figure","type":"Plot"}},"id":"0757e4e0-aa05-4734-b4bc-d0993af34102","type":"ResizeTool"},{"attributes":{"callback":null,"tabs":[{"id":"4a26b613-9c8e-40df-9610-8b592352ce8b","type":"Panel"},{"id":"016b01ba-9763-42c3-95ba-482f878f0416","type":"Panel"}]},"id":"3f0ca99f-2d0f-4ccb-a9bb-56d023291415","type":"Tabs"},{"attributes":{"plot":{"id":"9b97d09b-60fd-45fc-ab54-7bd70fc48dd1","subtype":"Figure","type":"Plot"},"ticker":{"id":"7e4901f4-8e64-4eef-b597-577149ce094a","type":"BasicTicker"}},"id":"5fa157e7-2b46-4f55-9372-834b1a28c52a","type":"Grid"},{"attributes":{"plot":{"id":"9b97d09b-60fd-45fc-ab54-7bd70fc48dd1","subtype":"Figure","type":"Plot"}},"id":"bace56e7-11ad-4611-8b0f-14fecb8bf0bb","type":"ResizeTool"},{"attributes":{"dimension":1,"plot":{"id":"9b97d09b-60fd-45fc-ab54-7bd70fc48dd1","subtype":"Figure","type":"Plot"},"ticker":{"id":"2ee43590-465e-46b8-bf34-e6d310b449e9","type":"BasicTicker"}},"id":"0627f831-e7f1-4729-bff5-baa1417cfab6","type":"Grid"},{"attributes":{"formatter":{"id":"d22be493-e0c8-4ec5-8ee6-dd08ae587503","type":"BasicTickFormatter"},"plot":{"id":"9b97d09b-60fd-45fc-ab54-7bd70fc48dd1","subtype":"Figure","type":"Plot"},"ticker":{"id":"2ee43590-465e-46b8-bf34-e6d310b449e9","type":"BasicTicker"}},"id":"595c3b93-b975-4dd0-8828-2cbb03ee07b2","type":"LinearAxis"},{"attributes":{"formatter":{"id":"9cfc6b3d-c02f-49de-b053-8823422ea8fb","type":"BasicTickFormatter"},"plot":{"id":"9cfa3ec0-1757-4483-b474-33def6f2e366","subtype":"Figure","type":"Plot"},"ticker":{"id":"484d5d37-c6e2-4fed-bbdd-583eb7e0c18b","type":"BasicTicker"}},"id":"9c73c0b5-09c7-42f8-a197-dc92ce1cff38","type":"LinearAxis"},{"attributes":{"plot":{"id":"9b97d09b-60fd-45fc-ab54-7bd70fc48dd1","subtype":"Figure","type":"Plot"}},"id":"2b6bdb98-03fb-4d32-b5d4-9c1c660f55b5","type":"WheelZoomTool"},{"attributes":{},"id":"6fd74724-86b2-498b-870f-62eba89f09db","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"271ac40f-041e-4fdb-9aa1-5daba974651b","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"aef2a4fc-0997-442e-aa5c-5438314f80f5","type":"LinearAxis"}],"left":[{"id":"595c3b93-b975-4dd0-8828-2cbb03ee07b2","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"aef2a4fc-0997-442e-aa5c-5438314f80f5","type":"LinearAxis"},{"id":"5fa157e7-2b46-4f55-9372-834b1a28c52a","type":"Grid"},{"id":"595c3b93-b975-4dd0-8828-2cbb03ee07b2","type":"LinearAxis"},{"id":"0627f831-e7f1-4729-bff5-baa1417cfab6","type":"Grid"},{"id":"68ff30f2-75b2-4aeb-ae04-e01f625aaa35","type":"BoxAnnotation"},{"id":"4bc3c403-ad11-405f-b171-132d58962837","type":"GlyphRenderer"}],"tool_events":{"id":"6fd74724-86b2-498b-870f-62eba89f09db","type":"ToolEvents"},"tools":[{"id":"4124af0f-84ad-4507-8bfc-e015ff335075","type":"PanTool"},{"id":"2b6bdb98-03fb-4d32-b5d4-9c1c660f55b5","type":"WheelZoomTool"},{"id":"3f4577ae-3f33-4bc4-baca-ca4cb6726e9b","type":"BoxZoomTool"},{"id":"1c6f94d1-481e-43c6-922e-68d009a483a5","type":"PreviewSaveTool"},{"id":"bace56e7-11ad-4611-8b0f-14fecb8bf0bb","type":"ResizeTool"},{"id":"cfd5089d-1d0e-4d71-a878-45205f8dbed1","type":"ResetTool"},{"id":"2385d852-6742-4aa2-9de3-00afe137766a","type":"HelpTool"}],"x_range":{"id":"9c92a9a2-8ab5-4d2f-bab9-7122845d9c30","type":"DataRange1d"},"y_range":{"id":"3206e209-8528-4a08-a72b-aa9eabddda5c","type":"DataRange1d"}},"id":"9b97d09b-60fd-45fc-ab54-7bd70fc48dd1","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"9b97d09b-60fd-45fc-ab54-7bd70fc48dd1","subtype":"Figure","type":"Plot"}},"id":"cfd5089d-1d0e-4d71-a878-45205f8dbed1","type":"ResetTool"},{"attributes":{"plot":{"id":"9cfa3ec0-1757-4483-b474-33def6f2e366","subtype":"Figure","type":"Plot"},"ticker":{"id":"58b48529-9209-457f-931d-95ba05d557ae","type":"BasicTicker"}},"id":"f478e4f6-6601-46ff-b5d3-3b5a164c7a30","type":"Grid"},{"attributes":{"callback":null},"id":"06e2ce2d-2bd2-41d8-9c1e-d6a359a291ff","type":"DataRange1d"},{"attributes":{},"id":"ba78a419-0e42-4f18-af4f-1d124db1ba64","type":"BasicTickFormatter"},{"attributes":{},"id":"d22be493-e0c8-4ec5-8ee6-dd08ae587503","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"9cfa3ec0-1757-4483-b474-33def6f2e366","subtype":"Figure","type":"Plot"}},"id":"b82ba66e-a617-4d89-92a0-215295446a4e","type":"PanTool"},{"attributes":{},"id":"2ee43590-465e-46b8-bf34-e6d310b449e9","type":"BasicTicker"},{"attributes":{"callback":null},"id":"9c92a9a2-8ab5-4d2f-bab9-7122845d9c30","type":"DataRange1d"},{"attributes":{"plot":{"id":"9cfa3ec0-1757-4483-b474-33def6f2e366","subtype":"Figure","type":"Plot"}},"id":"12ca555e-50c7-477f-878b-83c6ab84b821","type":"WheelZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"2e796f8f-d68a-4af7-a8c6-bd96cc6e4482","type":"Line"},{"attributes":{},"id":"484d5d37-c6e2-4fed-bbdd-583eb7e0c18b","type":"BasicTicker"},{"attributes":{},"id":"7e4901f4-8e64-4eef-b597-577149ce094a","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"1cd21aa1-3fce-4f42-ac78-921cb115435e","type":"Circle"},{"attributes":{"overlay":{"id":"68ff30f2-75b2-4aeb-ae04-e01f625aaa35","type":"BoxAnnotation"},"plot":{"id":"9b97d09b-60fd-45fc-ab54-7bd70fc48dd1","subtype":"Figure","type":"Plot"}},"id":"3f4577ae-3f33-4bc4-baca-ca4cb6726e9b","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"9b97d09b-60fd-45fc-ab54-7bd70fc48dd1","subtype":"Figure","type":"Plot"}},"id":"2385d852-6742-4aa2-9de3-00afe137766a","type":"HelpTool"},{"attributes":{"overlay":{"id":"44df88a9-491d-4c74-af6f-56e6a4653959","type":"BoxAnnotation"},"plot":{"id":"9cfa3ec0-1757-4483-b474-33def6f2e366","subtype":"Figure","type":"Plot"}},"id":"80362a4c-c9e8-457b-8095-8a1406a55a9c","type":"BoxZoomTool"},{"attributes":{},"id":"9cfc6b3d-c02f-49de-b053-8823422ea8fb","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"9cfa3ec0-1757-4483-b474-33def6f2e366","subtype":"Figure","type":"Plot"},"ticker":{"id":"484d5d37-c6e2-4fed-bbdd-583eb7e0c18b","type":"BasicTicker"}},"id":"70e01a66-6a00-4fd5-91c2-bd4d0cc33383","type":"Grid"},{"attributes":{},"id":"fd5a25f9-0599-41ee-9b5c-63cdccbe68b4","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"1d5a2d52-f712-4a26-881a-51f80d569a61","type":"Line"},{"attributes":{"plot":{"id":"9b97d09b-60fd-45fc-ab54-7bd70fc48dd1","subtype":"Figure","type":"Plot"}},"id":"1c6f94d1-481e-43c6-922e-68d009a483a5","type":"PreviewSaveTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"b34d47bc-9a82-449a-b75c-401d9b7d40bc","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"68ff30f2-75b2-4aeb-ae04-e01f625aaa35","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"fd5a25f9-0599-41ee-9b5c-63cdccbe68b4","type":"BasicTickFormatter"},"plot":{"id":"9cfa3ec0-1757-4483-b474-33def6f2e366","subtype":"Figure","type":"Plot"},"ticker":{"id":"58b48529-9209-457f-931d-95ba05d557ae","type":"BasicTicker"}},"id":"7e87a78e-897e-40a9-bf81-4cf86f0d960c","type":"LinearAxis"},{"attributes":{},"id":"58b48529-9209-457f-931d-95ba05d557ae","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"f8464d6e-c60d-4248-a23e-99c6368bd7b8","type":"Circle"},{"attributes":{"data_source":{"id":"b34d47bc-9a82-449a-b75c-401d9b7d40bc","type":"ColumnDataSource"},"glyph":{"id":"1cd21aa1-3fce-4f42-ac78-921cb115435e","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"f8464d6e-c60d-4248-a23e-99c6368bd7b8","type":"Circle"},"selection_glyph":null},"id":"55a22a7a-aa62-458b-8bb7-67ca4a52ef88","type":"GlyphRenderer"},{"attributes":{},"id":"7b618bdc-e1ec-410b-b7c4-49cdb873bc2f","type":"ToolEvents"}],"root_ids":["9cfa3ec0-1757-4483-b474-33def6f2e366","9b97d09b-60fd-45fc-ab54-7bd70fc48dd1","3f0ca99f-2d0f-4ccb-a9bb-56d023291415"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"8e5e3603-c01e-472e-a11f-5eeeb1806e5a","elementid":"b2c3a9c7-e6f6-4fb6-8409-f9bc25fd8874","modelid":"3f0ca99f-2d0f-4ccb-a9bb-56d023291415"}];
          
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